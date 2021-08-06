import { shallowMount } from "@vue/test-utils";
import HeaderLogged from '.'
import { routes } from '../../router'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {

  async function getWrapper() {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    return wrapper
  }

  it('should render header logged correctly', async () => {

    const wrapper = await getWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 3 dots when thre\'s not user logged', async () => {

    const wrapper = await getWrapper()
    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('should render user when thre\'s user logged', async () => {

    mockStore.currentUser.name = 'Teste'
    
    const wrapper = await getWrapper()
    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Teste (sair)')
  })

})