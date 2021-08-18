import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { AppRootState } from "../App";

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
