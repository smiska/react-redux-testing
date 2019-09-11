import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'TestComment'
  }
  expect(commentsReducer([], action)).toEqual(['TestComment'])
})

it('handles action with unknown type', () => {
  expect(commentsReducer([], {})).toEqual([])
})
