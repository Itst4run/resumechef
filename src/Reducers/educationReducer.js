let initialState={
    School_name:'',
    city:'',
    country:'',
    degree:'',
    discription:'',
    graduationmonth:'',
    graduationyear:''
}
const educationReducer=(state=initialState,action)=>{
    if(action.type=="UpdateEducation"){
     return {
         ...state,
         School_name:action.payload.School_name,
         city:action.payload.city,
         country:action.payload.country,
         degree:action.payload.degree,
         discription:action.payload.discription,
         graduationmonth:action.payload.graduationmonth,
         graduationyear:action.payload.graduationyear,
     }
    }
    else{
        return state
        
    }

}
export default educationReducer
