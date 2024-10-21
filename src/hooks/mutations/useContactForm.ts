import { errorCatch } from '@/services/api/api.helper'
import { contactService, IContact } from '@/services/contact/contact.service'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export default function useContactForm() {
  const t = useTranslations("Toast.Contact")

  return useMutation({
    mutationKey: ['contact-form'],
    mutationFn: (data: IContact) => contactService.mutateContact(data),
    onError(error) {
      toast.error(`${t("error")} ${errorCatch(error)}.`, {
        position: 'top-center',
      })
    }
  })
}