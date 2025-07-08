import { capitalize, camelCase, kebabCase, snakeCase } from 'lodash';

/**
 * 首字母大写
 */
export const capitalizeFirst = (str: string): string => {
  return capitalize(str);
};

/**
 * 转换为驼峰命名
 */
export const toCamelCase = (str: string): string => {
  return camelCase(str);
};

/**
 * 转换为短横线命名
 */
export const toKebabCase = (str: string): string => {
  return kebabCase(str);
};

/**
 * 转换为下划线命名
 */
export const toSnakeCase = (str: string): string => {
  return snakeCase(str);
};

/**
 * 截断字符串
 */
export const truncate = (str: string, length: number = 50): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}; 