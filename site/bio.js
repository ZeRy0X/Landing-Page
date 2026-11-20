(() => {
  const ID = "467374915939467275";
  const API = "https://api.lanyard.rest/v1/users/" + ID;
  const STATUS = { online: "Online", idle: "Idle", dnd: "Do Not Disturb", offline: "Offline" };
  const VERB = { 0: "Playing", 1: "Streaming", 2: "Listening to", 3: "Watching", 5: "Competing in" };
  const $ = (id) => document.getElementById(id);

  // build an element; text is always set via textContent (API data is untrusted)
  const h = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const img = (src, alt) => {
    const e = h("img");
    e.src = src;
    e.alt = alt || "";
    e.width = e.height = 40;
    e.loading = "lazy";
    e.onerror = () => { e.onerror = null; e.src = "/nopic.svg"; };
    return e;
  };
  const mmss = (ms) => {
    const s = Math.max(0, Math.floor(ms / 1000));
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  };

  function activityIcon(a) {
    const k = a.assets && (a.assets.large_image || a.assets.small_image);
    if (!k || k.startsWith("spotify:")) return null;
    if (/^https?:\/\//.test(k)) return k;
    if (k.startsWith("mp:external/")) {
      const m = k.slice(12).match(/\/(https?)\/(.+)/);
      return m ? m[1] + "://" + m[2] : null;
    }
    if (k.startsWith("mp:")) return "https://media.discordapp.net/" + k.slice(3);
    if (a.application_id)
      return "https://cdn.discordapp.com/app-assets/" + a.application_id + "/" + k.replace(/^(large_|small_)/, "") + ".webp";
    return null;
  }

  function render(d) {
    $("dot").className = "dot " + (STATUS[d.discord_status] ? d.discord_status : "offline");

    const u = d.discord_user || {};
    const avatar = u.avatar
      ? "https://cdn.discordapp.com/avatars/" + ID + "/" + u.avatar + "." + (u.avatar.startsWith("a_") ? "gif" : "webp") + "?size=128"
      : "/profile.png";
    if ($("av").getAttribute("data-src") !== avatar) {
      $("av").setAttribute("data-src", avatar);
      $("av").src = avatar;
    }

    const box = $("presence");
    box.replaceChildren();

    const st = STATUS[d.discord_status] ? d.discord_status : "offline";
    const head = h("div", "pr u");
    head.append(img(avatar, "avatar"));
    const info = h("div");
    info.append(h("p", "w nm", u.global_name || u.username || "Discord User"));
    const s = h("p", "st");
    s.append(h("i", st), h("span", null, STATUS[st]));
    info.append(s);
    head.append(info);
    box.append(head);

    const acts = (d.activities || []).filter((a) => a.type !== 4 && a.name !== "Spotify");
    if (!(d.listening_to_spotify && d.spotify) && !acts.length) return;

    const sub = h("div", "sub");
    const sp = d.spotify;
    if (d.listening_to_spotify && sp) {
      const r = h("div", "pr");
      r.append(img(sp.album_art_url, sp.album));
      const i = h("div");
      i.append(h("p", "w", sp.song), h("p", null, sp.artist), h("p", null, sp.album));
      r.append(i);
      const w = h("div");
      w.append(r);
      if (sp.timestamps) {
        const { start, end } = sp.timestamps;
        const pct = Math.max(0, Math.min(100, ((Date.now() - start) / (end - start)) * 100));
        const bar = h("div", "bar");
        const fill = h("i");
        fill.style.width = pct + "%";
        bar.append(fill);
        const tm = h("div", "tm");
        tm.append(h("span", null, mmss(Date.now() - start)), h("span", null, mmss(end - start)));
        w.append(bar, tm);
      }
      sub.append(w);
    }
    for (const a of acts) {
      const r = h("div", "pr");
      const ic = activityIcon(a);
      if (ic) r.append(img(ic, a.name));
      const i = h("div");
      i.append(h("p", null, VERB[a.type] || "Playing"), h("p", "w", a.name));
      if (a.details) i.append(h("p", null, a.details));
      if (a.state) i.append(h("p", null, a.state));
      r.append(i);
      sub.append(r);
    }
    box.append(sub);
  }

  async function load() {
    if (document.hidden) return;
    try {
      const j = await (await fetch(API)).json();
      if (j.success) render(j.data);
    } catch (e) {}
  }
  load();
  setInterval(load, 10000);
  document.addEventListener("visibilitychange", load);
})();
