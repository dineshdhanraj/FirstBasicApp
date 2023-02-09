export interface FetchDataAction{
    type:"FETCH_DATA";
    url:string;
}

export interface FetchDataAction2{
    type:"FETCH_DATA_TRACKER";
    url:string;
}

export interface FetchSuccessAction{
    type:"FETCH_SUCCESS";
    data:any;
}

export interface FetchFailureAction{
    type:"FETCH_FAILURE";
    error:any;
}

export const fetchData=(url: string): FetchDataAction=>({
    type:'FETCH_DATA',
    url,
})

export const fetchData2=(url: string): FetchDataAction2=>({
    type:'FETCH_DATA_TRACKER',
    url,
})

export const fetchSuccess = (data: any): FetchSuccessAction => ({
    type: "FETCH_SUCCESS",
    data,
  });
  
  export const fetchFailure = (error: any): FetchFailureAction => ({
    type: "FETCH_FAILURE",
    error,
  });
  
export type Actions = FetchDataAction | FetchSuccessAction | FetchFailureAction;

