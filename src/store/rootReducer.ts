import { combineReducers } from "redux";
import { prodReducer } from "./reducer/prodReducer";
import {basketReducer} from "./reducer/basketReducer"

export const rootReducer = combineReducers ({
    product:prodReducer,
    basket:basketReducer,
})

export type RootState = ReturnType<typeof rootReducer>

