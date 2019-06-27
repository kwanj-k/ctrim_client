import { all } from 'redux-saga/effects';
import {watchRegisterUserAsync} from './registrationsaga';

function* rootSaga() {
    yield all([
        watchRegisterUserAsync()
    ]);
}
export default rootSaga;
