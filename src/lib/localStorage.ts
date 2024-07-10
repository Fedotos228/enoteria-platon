
export enum TokenEnum {
  Token = 'token'
}

export function getToken() {
  if (typeof window !== "undefined") {
    const ls = localStorage.getItem(TokenEnum.Token)
    if (ls !== null) {
      try {
        return JSON.parse(ls)
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error)
        return ls // Return the raw string if JSON parsing fails
      }
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