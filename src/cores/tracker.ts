import { isReload } from '../utils/isReload';
import { runOnDOMContentReady } from '../utils/runOnDOMContentReady';
import { createOrGetUserId } from './api';
import { sendPageInfo, sendPageReferrer } from './pageInfo';
import { sendIsBounced } from './userAction';
import { sendOffline, startHeartbeat } from './userConnection';
import { sendUserDevice } from './userDevice';
import { sendUserInfo } from './userInfo';
class Tracker {
  private apiKey: string | null = null;
  private userId: string | null = null;
  constructor() {}

  public async init(apiKey: string) {
    if (apiKey.trim() === '') {
      throw new Error('api key가 없습니다');
    }
    this.apiKey = apiKey;
    this.userId = createOrGetUserId();
    runOnDOMContentReady(async () => {
      await Promise.all([
        sessionStorage.getItem('userInfoSent')
          ? null
          : sendUserInfo().then(() =>
              sessionStorage.setItem('userInfoSent', 'true')
            ),
        sessionStorage.getItem('userDeviceSent')
          ? null
          : sendUserDevice().then(() =>
              sessionStorage.setItem('userDeviceSent', 'true')
            ),
        sessionStorage.getItem('userPageReferrer')
          ? null
          : sendPageReferrer().then(() =>
              sessionStorage.setItem('userPageReferrer', 'true')
            ),
      ]);
      startHeartbeat();
    });

    window.addEventListener('DOMContentLoaded', sendPageInfo);
    window.addEventListener('popstate', sendPageInfo);
    const originPushState = history.pushState.bind(history);
    history.pushState = (...args) => {
      originPushState(...args);
      sendPageInfo();
    };
    window.addEventListener('beforeunload', () => {
      if (isReload()) {
        sessionStorage.setItem('reloaded', 'true');
      }
    });
    window.addEventListener('pagehide', () => {
      const wasReload = sessionStorage.getItem('reloaded') === 'true';
      sessionStorage.removeItem('reloaded');
      if (!wasReload) {
        sendOffline();
        sendIsBounced();
      }
    });
  }

  public getApiKey() {
    return this.apiKey;
  }
  public getUserId() {
    return this.userId;
  }
}
export const tracker = new Tracker();
