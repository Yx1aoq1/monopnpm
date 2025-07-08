import { pick, omit, merge, cloneDeep } from 'lodash';

/**
 * 选择对象的指定属性
 */
export const pickObject = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  return pick(obj, keys) as Pick<T, K>;
};

/**
 * 排除对象的指定属性
 */
export const omitObject = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  return omit(obj, keys) as Omit<T, K>;
};

/**
 * 深度合并对象
 */
export const mergeObjects = <T>(...objects: Partial<T>[]): T => {
  return merge({}, ...objects) as T;
};

/**
 * 深拷贝对象
 */
export const cloneObject = <T>(obj: T): T => {
  return cloneDeep(obj);
};

/**
 * 检查对象是否为空
 */
export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};
