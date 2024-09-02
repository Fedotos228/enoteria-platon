export enum TokenEnum {
  Token = 'token'
}

export function getToken() {
  if (typeof window !== "undefined") {
    const ls = localStorage.getItem(TokenEnum.Token)
    if (ls !== null) {
      return ls
    }
  }
  return null
}

export function setToken(token: string) {
  localStorage.setItem(TokenEnum.Token, token)
}

export function removeToken(token: string) {
  localStorage.removeItem(token)
}