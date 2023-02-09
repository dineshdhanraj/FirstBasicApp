import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* fetchData1(action){
    try{

        const response=yield axios.get(action.url);
        console.log("I AM DATA1 in sagas");
        yield put({type:'FETCH_SUCCESS',data:response.data});
    }
    catch(error)
    {
        yield put({type:'FETCH_FAILURE',error});
    }
}

function* fetchData2(action){
    try{

        const response=yield axios.get(action.url);
        console.log("I AM DATA1 in sagas");
        yield put({type:'FETCH_TRACKER',data:response.data});
    }
    catch(error)
    {
        yield put({type:'FETCH_FAILURE',error});
    }
}

export default function* sagas(){
    console.log("I AM LISTENING SAGAS");
    yield takeEvery('FETCH_DATA',fetchData1);
    yield takeEvery('FETCH_DATA_TRACKER',fetchData2);
}