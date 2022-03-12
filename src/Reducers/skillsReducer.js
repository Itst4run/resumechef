let initialState={
    skill_1:'',
    skill_2:'',
    skill_3:''
}
const skillsReducer=(state=initialState,action)=>{
    if(action.type=="UpdateSkills"){
     return {
         ...state,
         skill_1:action.payload.skill_1,
         skill_2:action.payload.skill_2,
         skill_3:action.payload.skill_3
     }
    }
    else{
        return state
        
    }

}
export default skillsReducer
