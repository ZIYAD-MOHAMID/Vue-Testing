import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Nav from './Nav.vue'

describe('Nav Tests', () => {
  // it('renders a profile link', () => {
  //   const wrappe = mount(Nav, {
  //     data() {
  //       return {
  //         isLoggedIn: true
  //       }
  //     }
  //   })
  //   const profilelink = wrappe.get('#profile')
  //   expect(profilelink.text()).toEqual('My Profile')
  // })
  it('should not render a profile link', () => {
    const wrappe = mount(Nav, {
      data() {
        return {
          isLoggedIn: false
        }
      }
    })
    //   const profilelink = wrappe.get('#profile')
    const pro = wrappe.find('#profile')
    expect(pro.exists()).toBe(false)
  })
})
