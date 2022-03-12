export const finalizeAction = (doc)=>{
    return {
        type: "UpdateStyle",
        payload: doc
    };
}