import { combineReducers } from "redux";
import { prodReducer } from "./reducer/prodReducer";
import {basketReducer} from "./reducer/basketReducer"
import {activeReducer } from "./reducer/activeReducer"

export const rootReducer = combineReducers ({
    product:prodReducer,
    basket:basketReducer,
    active:activeReducer
})

export type RootState = ReturnType<typeof rootReducer>

