export interface scrollEventBatch {
  page: string;
  recordScrolledPercent: number;
  timeStamp: string;
  event: string;
}
export interface clickEventBatch {
  page: string;
  clickTagName: string;
  clickInnerText: string;
  timeStamp: string;
  event: string;
}
export const clickEventBatchArray: clickEventBatch[] = [];
export const scrollEventBatchArray: scrollEventBatch[] = [];
