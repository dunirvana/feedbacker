import Contact from '.'
import { shallowMount } from '@vue/test-utils'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Contact />', () => {

  async function getWrapper() {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(Contact, {
      global: {
        plugins: [router]
      }
    })

    return wrapper
  }

  it('should render contact correctly', async () => {

    const wrapper = await getWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

})