import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import App from '../App.vue'

// @vitest-enviroment happy-dom

describe('App Tests', () => {
  it('should render', () => {
    const wrapper = mount(App)
    // has h1
    expect(wrapper.find('h1').exists()).toBeTruthy()
    // has input
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
    // has button
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  // it('should change messege', async () => {
  //   const wrapper = mount(App)
  //   await wrapper.find('input[type="text"]').setValue('LearnVue')
  //   await wrapper.find('button').trigger('click')
  //   expect(wrapper.find('h1').text()).toEqual('LearnVue')
  // })
})

// level Up - to help 'setvalue, trigger'
// 1- type in input
// 2- click
// 3- sheck the output
