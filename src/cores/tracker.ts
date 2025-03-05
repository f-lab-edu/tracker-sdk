import { sendPageInfo, sendPageReferrer } from './pageInfo.ts';
import { sendIsBounced, sendUserScrollDepth } from './userAction.ts';
import { sendUserDevice } from './userDevice.ts';
import { sendUserInfo } from './userInfo.ts';
class Tracker {
  private apiKey: string | null = null;
  constructor() {}

  public init(apiKey: string) {
    if (apiKey.trim() === '') {
      throw new Error('api key가 없습니다');
    }
    this.apiKey = apiKey;
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('userinfoSent')) {
        return;
      }
      sendUserInfo;
      sessionStorage.setItem('userInfoSent', 'true');
    });
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('userDeviceSent')) {
        return;
      }
      sendUserDevice;
      sessionStorage.setItem('userDeviceSent', 'true');
    });
    window.addEventListener('load', sendPageInfo);
    window.addEventListener('popstate', sendPageInfo);
    const originPushState = history.pushState;
    history.pushState = function (...args) {
      originPushState.call(this, ...args);
      sendPageInfo();
    };
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('userPageReferrer')) {
        return;
      }
      sendPageReferrer;
      sessionStorage.setItem('userPageReferrer', 'true');
    });
    window.addEventListener('beforeunload', sendIsBounced);
    window.addEventListener('load', sendUserScrollDepth);
  }

  public getApiKey() {
    return this.apiKey;
  }
}
export const tracker = new Tracker();
