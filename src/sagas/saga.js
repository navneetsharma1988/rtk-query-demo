import { takeEvery, call, put } from "redux-saga/effects";
import { getUserSuccess } from "../features/userSlice";

function* getUsersRequest() {
    try {
        const users = yield call(() => fetch("https://jsonplaceholder.typicode.com/users"));
        const formattedUsers = yield users.json();
        yield put(getUserSuccess(formattedUsers));
    } catch (error) {
        console.log(error);
    }
}

function* getUsersSaga() {
    yield takeEvery('users/getUsersFetch', getUsersRequest)
}

export default getUsersSaga;