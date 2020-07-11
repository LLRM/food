 import {put} from "redux-saga/effects";
import * as types from "./action-types";
import {get} from "../../utils/http"

function* loadData(action){
    try{
        const result=yield get({
            url:action.url
        })
        yield put({type: types.LOADDATA, data: result.data});
        //调用 put({type: 'INCREMENT'}) 的结果，
        //意思是告诉 middleware 发起一个 INCREMENT 的 action。
    }catch (e) {
    
    }
}

export {
    types,
    loadData as action
}