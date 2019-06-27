import { takeLatest, call, put } from 'redux-saga/effects';
import {
    REGISTER_USER
} from '../constants/actionTypes';
import {
    registerUserSuccess,
    registerUserFailure
} from '../actionCreator/registrationAction';
import RegistrationAPI from '../../services/RegistrationAPI';
import apiErrorHandler from '../../services/apiErrorHandler';


export function* registerUserAsync(action) {
    try {
        const response = yield call(
            RegistrationAPI.register,
            action.userData
        );
        yield put(registerUserSuccess(response.data));   

    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(registerUserFailure(errorMessage));
    }

}

export function* watchRegisterUserAsync() {
    yield takeLatest(REGISTER_USER, registerUserAsync);

}
