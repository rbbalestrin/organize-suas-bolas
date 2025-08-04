import { isValidJson } from "./helpers";

const CACHE_KEY = "BALL_SORT_GAME_PUZZLE";

type IStorageType = "localStorage" | "sessionStorage";

/**
 * Saves information in cache (session or localstorage)...
 * @param data
 * @param storageType
 */
export const saveCache = (
  data: any,
  storageType: IStorageType = "localStorage"
) => {
  const finalData = JSON.stringify(data);
  window[storageType].setItem(CACHE_KEY, finalData);
};

/**
 * Get the data stored in localStorage/sessionStorage
 * @param storageType
 * @returns
 */
export const getDataCache = (storageType: IStorageType = "localStorage") => {
  const data = window[storageType].getItem(CACHE_KEY) || "";
  return data !== "" && isValidJson(data) ? JSON.parse(data) : {};
};

/**
 * Save property values ​​to localstorage
 * @param property
 * @param value
 * @param storageType
 */
export const savePropierties = (
  property: string,
  value: any,
  storageType: IStorageType = "localStorage"
) => {
  const localCache = getDataCache(storageType);
  localCache[property] = value;
  saveCache(localCache, storageType);
};

/**
 * Store multiple keys at the same time...
 * @param data
 * @param storageType
 */
export const saveMultiplePropierties = (
  data: Record<string, any>,
  storageType: IStorageType = "localStorage"
) => {
  for (let key in data) {
    savePropierties(key, data[key], storageType);
  }
};

/**
 * Given a property, returns its information
 * @param key
 * @param initial
 * @param storageType
 * @returns
 */
export const getValueFromCache = (
  key: string = "",
  initial: any,
  storageType: IStorageType = "localStorage"
) => {
  const localCache = getDataCache(storageType);
  return localCache[key] ?? initial;
};

/**
 * Deleting a key from localStorage...
 * @param property
 * @param storageType
 */
export const deleteProperty = (
  property: string,
  storageType: IStorageType = "localStorage"
) => {
  const localCache = getDataCache(storageType);
  if (localCache[property]) {
    delete localCache[property];
  }

  saveCache(localCache, storageType);
};
