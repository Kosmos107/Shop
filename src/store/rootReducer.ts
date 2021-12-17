import { combineReducers } from "redux";
import { likeReducer } from "./reducer/likeReducer";
import { prodReducer } from "./reducer/prodReducer";

export const rootReducer = combineReducers ({
    like:likeReducer,
    prod:prodReducer,
})

export type RootState = ReturnType<typeof rootReducer>

