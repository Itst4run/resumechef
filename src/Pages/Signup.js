import React from 'react'
import styles from '../Styles/signup.module.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

   const auth = getAuth();
  const emailRef = React.createRef(null)
  const passRef = React.createRef(null)
  async function  handlesignup(){

    alert("user created successflly")
   
  try{
    let {user} = await createUserWithEmailAndPassword(auth,emailRef.current.value,passRef.current.value)
    console.log(user)
  }catch(err){
  console.log(err.message)
  }
  }
    return (
        <div class="form-card">
            <h2 class="form-heading center">Enter your details</h2>
            <div class="form-section">
                <div class="input-group full">
                    <label>Email</label>
                    <div class="effect">
                        <input type="text" name="email" ref={emailRef}/>
                    </div>
                </div>
                <div class="input-group full">
                    <label>Password</label>
                    <div class="effect">
                        <input type="password" name="password"  ref={passRef} />
                    </div>
                </div>
                <div class="form-buttons">
                    <button class="btn hvr-float-shadow" type="button" onClick={handlesignup}>Register</button>
                </div>
            </div>
        </div>
    )
}
