import { axiosClassic } from '../api/axios'

export interface ICredentials {
  identifier: string,
  password: string,
}

class AuthService {
  async login(credentials: ICredentials) {
    return axiosClassic.post(`/auth/local`, credentials)
  }
}

export const authService = new AuthService()
