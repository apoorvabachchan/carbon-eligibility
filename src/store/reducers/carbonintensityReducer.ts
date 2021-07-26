import { CarbonintensityState, CarbonintensityAction, GET_CARBONINTENSITY, SET_LOADING, SET_ERROR } from "../types";

const initialState: CarbonintensityState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: CarbonintensityAction): CarbonintensityState => {
  switch(action.type) {
    case GET_CARBONINTENSITY:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}