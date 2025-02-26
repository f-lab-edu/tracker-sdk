import { getTimeStamp } from '../utils/getTimeStamp.ts';
import {
  clickEventBatch,
  clickEventBatchArray,
  scrollEventBatch,
  scrollEventBatchArray,
} from './batchEventArray.ts';

export function addScrollEventToBatch() {
  window.addEventListener('scroll', (event) => {
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
    const data: scrollEventBatch = {
      page: window.location.href,
      recordScrolledPercent: recordScrolledPercent || 0,
      timeStamp: getTimeStamp(),
      event: 'scroll',
    };
    scrollEventBatchArray.push(data);
  });
}

export function addClickEventToBatch() {
  window.addEventListener('click', (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const data: clickEventBatch = {
        page: window.location.href,
        clickTagName: event.target.tagName,
        clickInnerText: event.target.innerText,
        timeStamp: getTimeStamp(),
        event: 'click',
      };
      clickEventBatchArray.push(data);
    }
  });
}

export function getIsInteractive() {
  const interactionEvents = [
    'click',
    'scroll',
    'keydown',
    'touchstart',
    'input',
    'touchstart',
    'focus',
  ];
  let isInterActive = false;
  const handleInterActive = () => {
    isInterActive = true;
  };
  interactionEvents.forEach((event) => {
    window.addEventListener(event, handleInterActive);
  });
  const INTERACTION_TIMEOUT = 30000;
  return new Promise((resolve) => {
    setTimeout(() => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, handleInterActive);
      });
      resolve(isInterActive);
    }, INTERACTION_TIMEOUT);
  });
}
