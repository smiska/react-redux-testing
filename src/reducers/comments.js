import { SAVE_COMMENT, FETCH_COMMENT } from 'actions/types'

// https://www.smashingmagazine.com/2018/01/rise-state-machines/
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

// persistency in state machines when loadbalancing
// state machine should always be decoupled from business logic
