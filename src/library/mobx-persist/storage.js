import { AESDecrypt, AESEncrypt } from "../crypto/crypto";

const shouldEncrypt = false

/**
 * It clears all the data from the local storage
 * @returns A promise that will resolve to null if the localStorage is cleared, or reject with an error if it fails.
 */
export function clear() {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.clear();
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * It gets the value of the key from the local storage and decrypts it if it is encrypted
 * @param key - The key of the item you want to get.
 * @returns A promise that resolves to the value of the key in localStorage.
 */
export function getItem(key) {
  return new Promise((resolve, reject) => {
    try {
      const value = window.localStorage.getItem(key);
      /* Checking if the value is encrypted or not. If it is encrypted, it will decrypt it. */
      if (shouldEncrypt && value) {
        resolve(AESDecrypt(value));
      } else {
        resolve(value);
      }
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * It removes an item from local storage
 * @param key - The key of the item you want to remove.
 * @returns A promise that will resolve to null if the item is successfully removed from localStorage.
 */
export function removeItem(key) {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.removeItem(key);
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * It takes a key and a value as parameters, encrypts the value and stores it in the local storage
 * @param key - The key to store the data under.
 * @param value - The value to be stored in the local storage.
 * @returns A promise.
 */
export function setItem(key, value) {
  return new Promise((resolve, reject) => {
    try {
      /* Encrypting the data before storing it in the local storage. */
      if (shouldEncrypt) {
        window.localStorage.setItem(key, AESEncrypt(value));
      } else {
        window.localStorage.setItem(key, value);
      }
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  clear,
  getItem,
  setItem,
  removeItem,
};
