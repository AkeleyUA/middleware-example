import { createReducer } from "@reduxjs/toolkit";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actions";
import { DataState } from "./types";

const initState: DataState = {
  loading: false,
  items: [],
  err: null,
};

export const dataReducer = createReducer(initState, (b) => {
  b.addCase(GET_DATA_REQUEST, (state) => ({
    ...state,
    loading: true,
    err: null,
  }));
  b.addCase(GET_DATA_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    items: payload,
  }));
  b.addCase(GET_DATA_FAILURE, (state, { payload }) => ({
    ...state,
    loading: false,
    err: payload,
  }));
});
