import { SAVE_COMMENT, FETCH_COMMENT } from 'actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    case FETCH_COMMENT:
      const newComments = action.payload.data.map(c => c.name)
      return [...state, ...newComments]
    default:
      return state
  }
}
