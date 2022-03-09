import { combineReducers } from "redux";
import score from "./score";
import todoList from "./todo";
import loading from "./loading";

const rootReducer = combineReducers({ score, todoList, loading });

export default rootReducer;
