import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

describe('Commentbox component tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <CommentBox />
      </Root>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper).not.toBe(undefined)
  })

  it('renders input & two buttons', () => {
    expect(wrapper.find('textarea').length).toBe(1)
    expect(wrapper.find('button').length).toBe(2)
  })

  describe('how textarea works', () => {
    beforeEach(() => {
      wrapper.find('textarea').simulate('change', {
        target: { value: 'mockVal' }
      })
      wrapper.update()
    })

    it('allows user input text in textarea', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('mockVal')
    })

    it('clears textarea on submit', () => {
      wrapper.find('form').simulate('submit')
      wrapper.update()
      expect(wrapper.find('textarea').prop('value')).toEqual('')
    })
  })
})
