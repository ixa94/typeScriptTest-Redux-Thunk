import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/combinedReducer";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
