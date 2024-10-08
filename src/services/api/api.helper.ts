export const getContentType = () => ({
  'Conent-Type': 'application/json'
})

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.error.message

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message
}