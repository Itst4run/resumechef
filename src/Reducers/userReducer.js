const initialState = {
 
    email: "",
    uid: ""
  };
  
  export default function userReducer(state=initialState, action){
    if(action.type ==='user'){
      return action.payload;
    }else{
      return state;
    }
  }