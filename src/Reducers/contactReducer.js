let initialState={
    name:'',
    address:'',
    email:'',
    city:'',
    country:'',
    phone:'',
}
const contactReducer=(state=initialState,action)=>{
    if(action.type=="UpdateContact"){
     return {
         ...state,
         name:action.payload.name,
         address:action.payload.address,
         email:action.payload.email,
         city:action.payload.city,
         country:action.payload.country,
         phone:action.payload.phone
     }
    }
    else{
        return state
        
    }

}
export default contactReducer
