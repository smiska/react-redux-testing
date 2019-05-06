import React from 'react';
import CommentList from 'components/CommentList';
import { shallow, mount, render } from 'enzyme';

describe('App component tests', () => {

  afterAll => {
  }
  
  it('renders without crashing', () => {
    const mockProps = { text: 'Way to go, champ!' }
    const wrapper = shallow(CommentList(mockProps))
    expect(wrapper).not.toBe(undefined)
  });
  
  it('shows form', () => {
    
  })
})
