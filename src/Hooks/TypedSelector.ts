import {TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../store/rootReducer"

export const TypedSelector:TypedUseSelectorHook<RootState> = useSelector