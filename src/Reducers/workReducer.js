let initialState={
    job_title:'',
    company:'',
    city:'',
    country:'',
    startdate:'',
    enddate:''
}
const workReducer=(state=initialState,action)=>{
    
    if(action.type=="UpdateWork"){
     return {
         ...state,
         job_title:action.payload.job_title,
         company:action.payload.company,
         city:action.payload.city,
         country:action.payload.country,
         startmonth:action.payload.startmonth,
         startyear:action.payload.startyear,
         endmonth:action.payload.endmonth,
         endyear:action.payload.endyear,
     }
    }
    else{
        return state
        
    }

}
export default workReducer
