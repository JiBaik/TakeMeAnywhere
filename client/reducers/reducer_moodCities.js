import { SET_CITIES } from '../actions/index'

export default function (state = null, action) {
  switch(action.type) {
    case SET_CITIES :
      return action.payload;
  }
  return state;
}

