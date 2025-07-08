/**
 * 格式化数字为货币格式
 */
export const formatCurrency = (num: number, currency: string = '¥'): string => {
  return `${currency}${num.toLocaleString()}`;
};

/**
 * 保留小数位数
 */
export const toFixed = (num: number, digits: number = 2): number => {
  return Number(num.toFixed(digits));
};

/**
 * 生成指定范围内的随机数
 */
export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 计算百分比
 */
export const toPercentage = (value: number, total: number, digits: number = 2): string => {
  if (total === 0) return '0%';
  return `${((value / total) * 100).toFixed(digits)}%`;
};

/**
 * 检查是否为偶数
 */
export const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

/**
 * 检查是否为奇数
 */
export const isOdd = (num: number): boolean => {
  return num % 2 !== 0;
}; 