import useStore from '../hooks/useStore'
import { setCurrentUser, resetUserStore, setApiKey, cleanCurrentUser } from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', async () => {
    const store = useStore()
    setCurrentUser({ name: 'Teste' })
    expect(store.User.currentUser.name).toBe('Teste')
  })

  it('should set api_key current user', async () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', async () => {
    const store = useStore()
    setCurrentUser({ name: 'Teste' })
    expect(store.User.currentUser.name).toBe('Teste')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })

})

