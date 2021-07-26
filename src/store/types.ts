export const GET_CARBONINTENSITY = 'GET_CARBONINTENSITY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Data {
  regionid: number;
  dnoregion: string;
  shortname: string;
  postcode: string;
  data: Intensity[];
}

export interface Intensity {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    index: string;
  };
  generationmix: generationmix[];
}

export interface generationmix {
    fuel: string;
    perc: number;
}

export interface CarbonintensityData {
  data: Data[];
}

export interface CarbonintensityError {
  cod: string;
  message: string;
}

export interface CarbonintensityState {
  data: CarbonintensityData | null;
  loading: boolean;
  error: string;
}

interface GetCarbonintensityAction {
  type: typeof GET_CARBONINTENSITY;
  payload: CarbonintensityData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type CarbonintensityAction = GetCarbonintensityAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}