import { debounce } from '../utils/debounce.ts';
import { sendToServer } from './api.ts';

export function sendUserScrollDepth() {
  const debounceScrollHandler = debounce(() => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolledPercent = Math.floor(
      ((scrollTop + windowHeight) / fullHeight) * 100
    );
    let recordScrolledPercent;
    if (scrolledPercent > 0 && scrolledPercent <= 25) {
      recordScrolledPercent = 25;
    } else if (scrolledPercent > 25 && scrolledPercent <= 50) {
      recordScrolledPercent = 50;
    } else if (scrolledPercent > 50 && scrolledPercent <= 75) {
      recordScrolledPercent = 75;
    } else if (scrolledPercent > 75 && scrolledPercent <= 100) {
      recordScrolledPercent = 100;
    }
    const data = {
      url: window.location.href,
      scrollDepth: recordScrolledPercent || 0,
    };
    sendToServer('userAction/scrollDepth', data);
  }, 500);
  window.addEventListener('scroll', debounceScrollHandler);
}

export function sendIsBounced() {
  const data = {
    url: window.location.href,
    isBounced: true,
  };
  sendToServer('userAction/bounceRate', data);
}
