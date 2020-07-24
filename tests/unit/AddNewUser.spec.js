import { shallowMount } from '@vue/test-utils'
import AddNewUser from '@/components/AddNewUser.vue'

let wrapper = null

// SETUP - run prior to each unit test
beforeEach(() => {
  wrapper = shallowMount(AddNewUser)
})

// TEARDOWN - run after to each unit test
afterEach(() => {
  wrapper.destroy()
})

// Unit test suite for the AddNewUser component
describe('AddNewUser.vue Test', () => {
    it('initializes with correct elements', () => {
        // check the name of the component
        expect(wrapper.name()).toMatch('AddNewUser')
      
        // check that each element of the user is initialized to empty strings
        expect(wrapper.vm.user.name).toMatch(/^$/)
        expect(wrapper.vm.user.username).toMatch(/^$/)
        expect(wrapper.vm.user.email).toMatch(/^$/)
      
        // check that the heading text is rendered
        expect(wrapper.findAll('h1').length).toEqual(1)
        expect(wrapper.findAll('h1').at(0).text()).toMatch('Add a New User:')
      
        // check that 3 labels are created
        expect(wrapper.findAll('label').length).toEqual(3)
        expect(wrapper.findAll('label').at(0).text()).toMatch('Name:')
        expect(wrapper.findAll('label').at(1).text()).toMatch('Username:')
        expect(wrapper.findAll('label').at(2).text()).toMatch('Email:')
    })
  
      it('emits an event when a new user with valid data is added', () => {
        // set the input data for the user
        wrapper.setData({ user: {name: 'Name1', username: 'Username1', email: 'user@email.com'} })
      
        // check that the user data is set before emitting the event
        expect(wrapper.vm.user.name).toMatch('Name1')
        expect(wrapper.vm.user.username).toMatch('Username1')
        expect(wrapper.vm.user.email).toMatch('user@email.com')
      
        // trigger an event when the 'Submit' button is clicked
        wrapper.find('button').trigger('click')
      
        // check that 1 occurrence of the event has been emitted
        expect(wrapper.emitted('create-user')).toBeTruthy()
        expect(wrapper.emitted('create-user').length).toBe(1)
      
        // check that the user data is cleared after emitting the event
        expect(wrapper.vm.user.name).toMatch(/^$/)
        expect(wrapper.vm.user.username).toMatch(/^$/)
        expect(wrapper.vm.user.email).toMatch(/^$/)
    })
  
    it('does not emit an event when a new user without data is added', () => {
        // don't set the input data for the user
      
        // trigger an event when the 'Submit' button is clicked
        wrapper.find('button').trigger('click')
      
        // check that the event has NOT been emitted
        expect(wrapper.emitted('create-user')).toBeUndefined()
    })
})
