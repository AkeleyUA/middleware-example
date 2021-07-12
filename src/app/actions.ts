import { createAction } from "@reduxjs/toolkit";
import { User } from "./types";

export const GET_DATA_REQUEST = createAction("GET_DATA_REQUEST");
export const GET_DATA_SUCCESS = createAction<User[]>("GET_DATA_SUCCESS");
export const GET_DATA_FAILURE = createAction<string>("GET_DATA_FAILURE");
