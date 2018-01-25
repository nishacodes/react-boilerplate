import {
  INCREMENT
} from './constants'

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}
