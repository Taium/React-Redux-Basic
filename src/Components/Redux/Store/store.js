import { createStore } from "redux";
import cartReduces from "../Reducers/cartReduces";


export const store = createStore(cartReduces);