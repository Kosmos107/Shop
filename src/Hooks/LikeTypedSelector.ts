import {TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../store/rootReducer"

export const LikeTypedSelector:TypedUseSelectorHook<RootState> = useSelector