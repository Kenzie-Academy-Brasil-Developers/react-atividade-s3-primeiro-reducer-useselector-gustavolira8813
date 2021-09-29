import { createStore, combineReducers } from "redux";

//importando o reducer
import fruitsReducer from "./modules/fruits/reducer";

//combinamos os reducers da aplicação, neste exemplo temos apenas um o fruits
const reducers = combineReducers({ fruits: fruitsReducer });

//passamos o reducers combinados para a store
const store = createStore(reducers);

export default store;
