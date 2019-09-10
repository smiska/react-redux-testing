import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'
import { async } from 'q'

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',
        {
            status: 200,
            response: [{name: 'Fetch1'}, {name: 'Fetch2'}]
        }
    )
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch & display a list of comments', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    wrapped.find('#fetch-comments-button').simulate('click')
    
    moxios.wait(()=> {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
        wrapped.unmount()
    })
})