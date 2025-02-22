import { getDevice } from '../utils/getDevice.ts';
import { getTimeStamp } from '../utils/getTimeStamp.ts';
import { sendToServer } from './api.ts';

const API_URL = 'TEST_API';
const HEART_BEAT_TIME = 5000;

export function startHeartBeat() {
  const heartBeatTimer = setInterval(() => {
    sendOnline();
  }, HEART_BEAT_TIME);

  window.addEventListener('load', () => {
    sendUserInfo();
  });

  window.addEventListener('beforeunload', () => {
    clearInterval(heartBeatTimer);
    sendOffline();
  });
}

function sendUserInfo() {
  const data = {
    page: window.location.href,
    userPrevPage: document.referrer,
    userAccessTime: getTimeStamp(),
    userDevice: getDevice(),
    userLanguage: navigator.language,
    event: 'pageLoad',
  };
  sendToServer(API_URL, data);
}

function sendOffline() {
  const data = {
    page: window.location.pathname,
    timestamp: getTimeStamp(),
    status: 'offline',
    event: 'pageUnload',
  };
  navigator.sendBeacon(API_URL, JSON.stringify(data));
}

function sendOnline() {
  const data = {
    page: window.location.pathname,
    timestamp: getTimeStamp(),
    status: 'online',
    event: 'heartBeat',
  };
  sendToServer(API_URL, data);
}
