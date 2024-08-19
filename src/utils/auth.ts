import Cookies from "js-cookie";

const TokenKey = "User-Token";

export function getToken() {
  Cookies.get(TokenKey)
}

export function setToken(token: string) {
  /**
   * 1 / 48: 30 minutes
   */
  return Cookies.set(TokenKey, token, {
    expires: 1 / 48
  })
}

export function removeToken() {
  Cookies.remove(TokenKey)
}