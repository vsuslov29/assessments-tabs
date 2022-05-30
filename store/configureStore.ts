import { combineReducers } from 'redux';
import { assessmentsReducer } from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  assessments: assessmentsReducer,
};

const createStore = () => configureStore({
  reducer: rootReducer,
});

export default createStore;