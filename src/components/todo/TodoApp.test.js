import { mount } from '@vue/test-utils'
import { expect, describe, it, beforeEach } from 'vitest'
import Todo from './TodoApp.vue'

describe('App Tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Todo)
  })

  it('should render', () => {
    const todo = wrapper.get('[data-test="Todo"]')

    expect(todo.text()).toBe('learn Vue Testing')
  })

  //   it('should add new todo', async () => {
  //     const wrapper = mount(Todo)

  //     await wrapper.get('[data-test="Todo"]').setValue('learn Vue Testing')
  //     await wrapper.get('[data-test="form"]').trigger('submit')

  //     expect(wrapper.findAll('[data-test="Todo"]')).toHaveLength(2)
  //   })

  it('should be able to complete todo', async () => {
    await wrapper.get('[data-test="Todo-checkbox"]').setValue(true)
    expect(wrapper.get('[data-test="Todo"]').classes()).toContain('completed')
  })
})
