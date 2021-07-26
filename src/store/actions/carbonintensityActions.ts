import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { CarbonintensityAction, CarbonintensityData, CarbonintensityError, GET_CARBONINTENSITY, SET_LOADING, SET_ERROR } from '../types';

export const getCarbonintensity = (code: string): ThunkAction<void, RootState, null, CarbonintensityAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.carbonintensity.org.uk/regional/postcode/${code}`);

      if(!res.ok) {
        const resData: CarbonintensityError = await res.json();
        throw new Error(resData.message);
      }

      const resData: CarbonintensityData = await res.json();
      console.log(resData)
      dispatch({
        type: GET_CARBONINTENSITY,
        payload: resData
      });
    }catch(err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
    }
  }
}

export const setLoading = (): CarbonintensityAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): CarbonintensityAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}