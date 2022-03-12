let initialState={
    summary:'',
}
const summaryReducer=(state=initialState,action)=>{
    if(action.type=="UpdateSummary"){
     return {
         ...state,
         summary:action.payload.summary
     }
    }
    else{
        return state
        
    }

}
export default summaryReducer
