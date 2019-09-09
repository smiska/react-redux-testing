import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { shallow, mount, render } from 'enzyme';

describe('App component tests', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(App())
  })
  
  it('renders without crashing', () => {
    expect(wrapper).not.toBe(undefined)
  });
  
  it('shows form and list', () => {
    expect(wrapper.find(CommentBox)).toHaveLength(1)
    expect(wrapper.find(CommentList)).toHaveLength(1)
  })
})
