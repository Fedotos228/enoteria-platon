import { TokenEnum } from '@/lib/localStorage'
import { errorCatch } from '@/services/api/api.helper'
import { ICredentials, authService } from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'


export default function useLogin() {
  const locale = useLocale()
  const { replace } = useRouter()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (credentials: ICredentials) => authService.login(credentials),
    onSuccess(data) {
      localStorage.setItem(TokenEnum.Token, data.data.jwt)
      replace(`${locale}/orders`)
    },
    onError(error) {
      console.log(error)
      toast.error(errorCatch(error), {
        position: 'top-center'
      })
    }
  })
}