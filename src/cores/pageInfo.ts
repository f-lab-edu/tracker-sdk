import { sendToServer } from './api.ts';

export function sendPageReferrer() {
  const data = {
    referrer: document.referrer || 'direct',
  };
  sendToServer('/pageInfo/referrer', data);
}

export function sendPageInfo() {
  const loadTime = getPageLoadTime();
  const data = {
    url: window.location.href,
    loadTime: loadTime,
  };
  sendToServer('/pageInfo', data);
}

function getPageLoadTime() {
  const [navigation] = performance.getEntriesByType(
    'navigation'
  ) as PerformanceNavigationTiming[];
  return navigation
    ? Math.floor(navigation.loadEventEnd - navigation.startTime)
    : null;
}
