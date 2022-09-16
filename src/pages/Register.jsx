import { useState } from "react"
import Add from "../img/addAvatar.png"
import "../style.scss"
import {auth} from "../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {



function Register() {
  const [err,setErr] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    const auth = getAuth();
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      setErr(true);
    }
  }

  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className="logo">Chat App</span>
            <span className="title">Register</span>

            <form >

            <form onSubmit ={handleSubmit}>

                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display: "none"}} type="file" id="file" />
                <label htmlFor='file'>
                    <img src={Add} />
                    <span>Add an avatar</span>
                </label>

                <button type="submit">Submit</button>

                <button type="submit">Sign up</button>
                {err && <span>something went wrong</span>}

            </form>
            <p>You don't have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;