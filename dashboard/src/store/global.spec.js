import useStore from '../hooks/useStore'
import { resetGlobalStore, setGlobalLoading } from './global'

describe('GlobalStore', () => {
  afterEach(() => {
    resetGlobalStore()
  })

  it('should set current global loading true', async () => {
    const store = useStore()
    setGlobalLoading(true)
    expect(store.Global.isLoading).toBe(true)
  })

})

