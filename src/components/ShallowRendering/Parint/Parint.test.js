import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Parint from './Parint.vue'

describe('Parint Tests', () => {
  it('Parint', () => {
    const wrappe = mount(Parint)

    expect(wrappe.text()).toContain('Child')
  })
})
