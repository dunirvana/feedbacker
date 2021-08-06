import mockAxios from 'axios'
import UsersService from './users'

jest.mock('axios')

describe('UsersService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
 
  it('should return data from user', async () => {
    const user = {
        id: '99998888',
        name: 'Teste',
        email: 'teste@email.com',
        apiKey: '1234.5678.9012',
        createdAt: '1599264000000'
      }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await UsersService(mockAxios).getMe()
    expect(response.data).toHaveProperty('id')
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toHaveProperty('apiKey')
    expect(response.data).toHaveProperty('createdAt')
    expect(response).toMatchSnapshot()
  })  

  it('should generate api key', async () => {
    const api = {
        apiKey: '9999.7777.9012'
      }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: api })
    })

    const response = await UsersService(mockAxios).generateApiKey()
    expect(response.data).toHaveProperty('apiKey')
    expect(response).toMatchSnapshot()
  })  
})

