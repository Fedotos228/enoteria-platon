import { errorCatch } from '@/services/api/api.helper'
import { contactService, IContact } from '@/services/contact/contact.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function useContactForm() {
  return useMutation({
    mutationKey: ['contact-form'],
    mutationFn: (data: IContact) => contactService.mutateContact(data),
    onError(error) {
      toast.error(`A aparut o erroare ${errorCatch(error)}.`, {
        position: 'top-center',
      })
    }
  })
}