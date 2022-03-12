import React from 'react'
import styles from '../Styles/login.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
 const email = React.createRef(null)
  const pass = React.createRef(null)
  const auth = getAuth();
    function handlesignin(){
  signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user)
  alert("signin successfull")
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});

}
    return (
        <div className={styles.formcard}>
            <h2 className="form-heading center">Enter Login details</h2>
            <div className="form-section">
                <div className="input-group full">
                    <label>Email</label>
                    <div className="effect">
                        <input type="text" name="email" ref={email} />
                    </div>
                </div>
                <div className="input-group full">
                    <label>Password</label>
                    <div className="effect">
                        <input type="password" name="password" ref={pass}  />
                    </div>
                </div>
                <div className="form-buttons">
                    <button className="btn hvr-float-shadow" type="button" onClick={handlesignin}>Login</button>
                </div>
            </div>
        </div>
    )
}
