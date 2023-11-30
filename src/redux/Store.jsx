import { createStore } from "redux";
import BudgetReducer from "./BudgetReducer";

const store = createStore(BudgetReducer)

export default store