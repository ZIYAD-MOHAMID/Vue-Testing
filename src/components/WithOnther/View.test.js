import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import View from './ViewView.vue'

// @vitest-enviroment happy-dom

describe('View Tests', () => {
  const viewText = 'Hello From ViewView'

  //false
  it.skip('render span correctly', async () => {
    const viewId = 'viewId'
    render(View, {
      props: { element: 'span', id: viewId },
      slots: { default: viewText }
    })
    const view = await screen.findByText(viewText)
    expect(view.id).toBe(viewId)
    expect(view.innerHTML).toBe(viewText)
    expect(view.nodeName).toBe('span')
  })

  it('Thanos snap shot', () => {
    const wrapper = render(View, { props: { element: 'div' } })
    expect(wrapper).toMatchSnapshot()
  })
})
