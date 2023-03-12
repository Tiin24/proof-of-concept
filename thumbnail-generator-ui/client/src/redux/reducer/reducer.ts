import { Reducer } from "redux";
import {UploadData,SetImageAction,SetUploadDataAction,SetUrlAction,DeleteAction} from "../action/action"


export interface State {
  image: string | null;
  uploadData: UploadData | null;
  newUrl: string | null;
}



type Action = SetImageAction | SetUploadDataAction | SetUrlAction | DeleteAction;

const initialState: State = {
  image: null,
  uploadData: null,
  newUrl: null,
};
  
  const rootReducer: Reducer<State, Action> = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IMAGE':
        return { ...state, image: action.payload };
      case 'SET_UPLOAD_DATA':
        return { ...state, uploadData: action.payload };
        case 'SET_URL':
      return { ...state, newUrl: action.payload, loading: false };
      case 'DELETE_IMG':
      return initialState;
      default:
        return state;
    }
  };
  
  
  export default rootReducer;