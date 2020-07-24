import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Footer, {
      propsData: {
          message: 'EstelaR - 2020'
      }
    })

    // check that the title is rendered
    expect(wrapper.text()).toMatch('EstelaR - 2020')
  })
})