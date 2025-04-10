import { API_URL_BASE, sendToServer } from './api';
import { tracker } from './tracker';

export async function sendOnline() {
  const data = {
    isOnline: true,
  };
  sendToServer('/trackerSdk/userConnection', data);
}

export function sendOffline() {
  const sentOffline = sessionStorage.getItem('sendOffline');
  if (sentOffline) return;
  const userId = tracker.getUserId();
  const apiKey = tracker.getApiKey();
  if (!userId || !apiKey) return;

  const payload = JSON.stringify({
    isOnline: false,
    userId,
    apiKey,
  });
  navigator.sendBeacon(
    `${API_URL_BASE}/trackerSdk/userConnection/beacon`,
    payload
  );
  sessionStorage.setItem('sendOffline', 'true');
}

const HEART_BEAT_TIME = 25000;

export function startHeartbeat() {
  sendOnline();
  setInterval(() => {
    sendOnline();
  }, HEART_BEAT_TIME);
}
