import { combineReducers } from "redux";
import { prodReducer } from "./reducer/prodReducer";

export const rootReducer = combineReducers ({
    product:prodReducer,
})

export type RootState = ReturnType<typeof rootReducer>

