import { PRIVATE_KEY } from "constants/constants";
import CryptoJS from "crypto-js";

/**
 * It takes a string, encrypts it with AES, and returns the encrypted string
 * @param pureText - The text to be encrypted.
 * @returns The encrypted text.
 */
export const AESEncrypt = (pureText) => {
  return CryptoJS.AES.encrypt(pureText, PRIVATE_KEY, {
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};

/**
 * It takes an encrypted string and decrypts it using the private key
 * @param encryptedText - The encrypted text that you want to decrypt.
 * @returns The decrypted text.
 */
export const AESDecrypt = (encryptedText) => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, PRIVATE_KEY, {
    padding: CryptoJS.pad.Pkcs7,
  });
  try {
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return null;
  }
};
