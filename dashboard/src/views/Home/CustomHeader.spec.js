import CustomHeader from '.'
import { shallowMount } from '@vue/test-utils'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<CustomHeader />', () => {

  async function getWrapper() {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(CustomHeader, {
      global: {
        plugins: [router]
      }
    })

    return wrapper
  }

  it('should render custom header correctly', async () => {

    const wrapper = await getWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

})