import ACTION_TYPES from '../constants'

export const setUser = (data) => {
  return {
    type: 'SET_USER',
    payload: data
  }
}