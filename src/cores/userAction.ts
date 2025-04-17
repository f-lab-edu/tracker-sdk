import { API_URL_BASE } from './api';
import { tracker } from './tracker';

export function sendIsBounced() {
  const sendIsBounced = sessionStorage.getItem('sendIsBounced');
  if (sendIsBounced) return;
  const userId = tracker.getUserId();
  const apiKey = tracker.getApiKey();
  if (!userId || !apiKey) return;
  const payload = JSON.stringify({ url: window.location.href, userId, apiKey });
  navigator.sendBeacon(
    `${API_URL_BASE}/trackerSdk/userAction/bounceRate/beacon`,
    payload
  );
  sessionStorage.setItem('sendIsBounced', 'true');
}
