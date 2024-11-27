import { instance } from '../api/axios'

export interface IContact {
  fullname: string,
  email: string,
  phone: string,
  message: string,
}

class ContactService {
  async mutateContact(data: IContact) {
    return instance({
      url: `/contact-forms`,
      method: 'POST',
      data: data
    })
  }
}

export const contactService = new ContactService()