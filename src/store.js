import rootReducer from "./Reducers/index";
import{createStore} from "redux"
let store = createStore(rootReducer)
store.subscribe(()=>console.log(store.getState()))
export default store
