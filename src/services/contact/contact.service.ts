import { instance } from '../api/axios'

export interface IContact {
  fullname: string,
  email: string,
  phone: string,
  message: string,
}

class ContactService {
  async mutateContact(data: IContact) {
    return instance.post(`/contact-forms`, {
      data: data
    })
  }
}

export const contactService = new ContactService()