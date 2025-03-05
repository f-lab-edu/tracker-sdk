import { sendToServer } from './api.ts';

export function sendOnline() {
  const data = {
    isOnline: true,
  };
  sendToServer('/userConnection', data);
}

export function sendOffline() {
  const data = {
    isOnline: false,
  };
  navigator.sendBeacon('/userConnection', JSON.stringify(data));
}
