import { Action, Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from "./actions";
import { User } from "./types";

export const getJsonDataMiddleware: Middleware =
  (store) => (next) => (action: Action) => {
    if (action.type === GET_DATA_REQUEST.type) {
      // store.getState if need take some data from current state or if need call selector;

      axios
        .get<User[]>("https://jsonplaceholder.typicode.com/posts")
        // The use of types here is mandatory and very important.
        // In case of a bug, there will be a place to check. The rest of the types will be generated.
        .then((res) => store.dispatch(GET_DATA_SUCCESS(res.data)))
        .catch((err) => store.dispatch(GET_DATA_FAILURE(err.message)));
    }

    return next(action);
  };
