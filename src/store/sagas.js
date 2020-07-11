import { takeEvery } from "redux-saga/effects";
import { sagas as home } from "../pages/home/index";

let {GETLIST} = home.types;
//action-types

function* sagas(){
    yield takeEvery(GETLIST,home.action)
}
    //home.action---loadData
    //takeEvery，用于监听所有的 INCREMENT_ASYNC action，
    //并在 action 被匹配时执行 incrementAsync 任务。


export default sagas