import store from "../store";
import { Dispatch } from "react";

export const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;