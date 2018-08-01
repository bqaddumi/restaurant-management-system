import 'regenerator-runtime/runtime';
import { takeEvery, select } from 'redux-saga/effects';
import axios from '../services/axios';
import { order } from './../actions/index';

function* orderFunction() {
  try {
    const oldReddit = yield select();

   console.log("orderNow", oldReddit);
   var id =  Math.floor(Math.random() * 9999);
   var order = {
       id: id,
       items: oldReddit.selectedItem,
       price: oldReddit.totalPrice
   }
   console.log(order);
  yield axios.post('/Orders.json',order);
  } catch (error) {
    yield console.log(error);
  }
}

export function* orderSaga() {
  yield takeEvery(order, orderFunction);
}