import { Action } from './actions';
export interface State{
  data:any;
  error:any;
  loading:boolean;
  tracker:any;
}

const initialState: State = {
data:[],
error:null,
loading:false,
tracker:[],
}

export default function reducer(state=initialState,action: Action):State{

  switch(action.type){
    case "FETCH_DATA":console.log("I AM AT FETCHDATA");
    return {...state,loading:true};
    case "FETCH_SUCCESS": console.log("I AM AT fetchsucess reducer");return {...state,data:action.data,loading:false};
    case "FETCH_FAILER": return {...state,loading:false};
    case "FETCH_TRACKER": return {...state,tracker:action.data};

    default: return state;
  }

}