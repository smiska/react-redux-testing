import CommentList from 'components/CommentList'
import { shallow, mount, render } from 'enzyme'
import React from 'react'
import Root from 'Root'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment1', 'Comment2']
  }

  wrapped = mount(
    <Root initialState={ initialState }>
      <CommentList>
      </CommentList>
    </Root>
  )
})

it('creates 1 <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comments', () => {
  expect(wrapped.render().text()).toContain('Comment1')
  expect(wrapped.render().text()).toContain('Comment2')
})
