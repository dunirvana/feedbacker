export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/users/me')

    return {
      data: response.data
    }
  },
  generateApiKey: async () => {
    const response = await httpClient.post('/users/me/apiKey')
    console.log('generateApiKey response:', response)

    return {
      data: response.data
    }
  }
})
