import { combineReducers } from "redux";
import { prodReducer } from "./reducer/prodReducer";
import {basketReducer} from "./reducer/basketReducer"
import {activeReducer } from "./reducer/activeReducer"
import { searchReducer } from "./reducer/SearchReducer";
import { registerReducer } from "./reducer/registerReducer";

export const rootReducer = combineReducers ({
    product:prodReducer,
    basket:basketReducer,
    active:activeReducer,
    search:searchReducer,
    regist:registerReducer
})

export type RootState = ReturnType<typeof rootReducer>

