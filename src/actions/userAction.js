function userAction(userObj)
{
    return {
        type:"user",
        payload: userObj
    }
}
export default userAction;