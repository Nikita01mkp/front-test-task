import ACTION_TYPES from '../../constants'

export default function user(state = {}, action) {
  switch(action.type) {
    case 'SET_USER': {
      return action.payload;
    }

    default: return state;
  }
}