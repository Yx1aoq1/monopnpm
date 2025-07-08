import { chunk, uniq, flatten, compact } from 'lodash';

/**
 * 数组分块
 */
export const chunkArray = <T>(arr: T[], size: number = 2): T[][] => {
  return chunk(arr, size);
};

/**
 * 数组去重
 */
export const uniqueArray = <T>(arr: T[]): T[] => {
  return uniq(arr);
};

/**
 * 数组扁平化
 */
export const flattenArray = <T>(arr: T[][]): T[] => {
  return flatten(arr);
};

/**
 * 移除数组中的假值
 */
export const compactArray = <T>(arr: (T | null | undefined | false | 0 | '')[]): T[] => {
  return compact(arr) as T[];
};

/**
 * 数组求和
 */
export const sumArray = (arr: number[]): number => {
  return arr.reduce((sum, num) => sum + num, 0);
};

/**
 * 数组平均值
 */
export const averageArray = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}; 