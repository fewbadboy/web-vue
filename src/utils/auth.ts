import Cookies from "js-cookie";
import { base } from "@/settings";

const TokenKey = "User-Token";

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  /**
   * 1 / 48: 30 minutes
   */
  return Cookies.set(TokenKey, token, {
    path: base,
    expires: 1 / (48 * 10)
  })
}

export function removeToken() {
  Cookies.remove(TokenKey, {
    path: base,
    expires: 1 / (48 * 10)
  })
}