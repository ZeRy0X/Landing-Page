'use client';
import { useEffect, useState } from 'react';

const DISCORD_ID = '467374915939467275';

const STATUS_CONFIG = {
  online:  { color: 'bg-emerald-400', label: 'Online' },
  idle:    { color: 'bg-yellow-400',  label: 'Idle' },
  dnd:     { color: 'bg-red-500',     label: 'Do Not Disturb' },
  offline: { color: 'bg-neutral-500', label: 'Offline' },
};

const ACTIVITY_VERB = {
  0: 'Playing',
  1: 'Streaming',
  2: 'Listening to',
  3: 'Watching',
  5: 'Competing in',
};

export default function DiscordPresence() {
  const [presence, setPresence] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const json = await res.json();
        if (json.success) setPresence(json.data);
      } catch {}
    };
    load();
    const id = setInterval(load, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!presence) return null;

  const { discord_status, activities, listening_to_spotify, spotify } = presence;
  const status = STATUS_CONFIG[discord_status] ?? STATUS_CONFIG.offline;
  const activity = activities?.find(a => a.type !== 4);

  return (
    <div className="w-full rounded-xl bg-neutral-900/50 border border-neutral-800 px-4 py-3 space-y-2.5 text-left">
      {/* Discord icon + status */}
      <div className="flex items-center gap-2">
        <DiscordIcon />
        <span className={`w-2 h-2 rounded-full shrink-0 ${status.color}`} />
        <span className="text-xs text-neutral-400">{status.label}</span>
      </div>

      {/* Spotify */}
      {listening_to_spotify && spotify && (
        <div className="flex items-center gap-3">
          <img
            src={spotify.album_art_url}
            alt={spotify.album}
            className="w-9 h-9 rounded shrink-0 object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-white truncate">{spotify.song}</p>
            <p className="text-xs text-neutral-500 truncate">{spotify.artist}</p>
          </div>
          <SpotifyIcon />
        </div>
      )}

      {/* Game / other activity */}
      {!listening_to_spotify && activity && (
        <div className="space-y-0.5">
          <p className="text-xs text-neutral-600">{ACTIVITY_VERB[activity.type] ?? 'Playing'}</p>
          <p className="text-xs text-white font-medium">{activity.name}</p>
          {activity.details && (
            <p className="text-xs text-neutral-500 truncate">{activity.details}</p>
          )}
          {activity.state && (
            <p className="text-xs text-neutral-600 truncate">{activity.state}</p>
          )}
        </div>
      )}
    </div>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-neutral-500 shrink-0">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-emerald-500 shrink-0">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
