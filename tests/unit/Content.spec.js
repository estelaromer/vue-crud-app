import { shallowMount } from '@vue/test-utils'
import Content from '@/components/Content.vue'

describe('Content.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Content)

    // check the name of the component
    expect(wrapper.name()).toMatch('Content')

    // check that the title is rendered
    expect(wrapper.vm.message).toMatch('Content goes here!')
  })
})