import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { getJsonDataMiddleware } from "./middlewares";
import { dataReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(getJsonDataMiddleware))
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
