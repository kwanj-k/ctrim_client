import { takeLatest, call, put } from 'redux-saga/effects';
import toast from 'toastr';
import {
    REGISTER_USER
} from '../constants/actionTypes';
import {
    registerUser,
    registerUserSuccess,
    registerUserFailure
} from '../actionCreator/authActions';
import AuthenticationAPI from '../../../services/AuthenticationAPI';
import apiErrorHandler from '../../../services/apiErrorHandler';

export function* watchRegisterUserAsync() {
    yield takeLatest(REGISTER_USER, registerUserAsync);

}

export function* registerUserAsync(action) {
    try {
        const response = yield call(
            AuthenticationAPI.registerUser,
            action.userData
        );
        yield put(registerUserSuccess(response.data));
        toast.success(response.data.message);

    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(registerUserFailure(errorMessage));
        toast.error(errorMessage);
    }
}
