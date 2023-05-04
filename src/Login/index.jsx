
import { useState } from "react";
import login from "./index.module.css"
import { Alert, Button, Checkbox, FormControlLabel } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { CheckBox, Lock } from "@mui/icons-material";

const Login = ({users, setIsLoggedIn, user, setUser}) => {
  let[wrongUser,setWrongUser] =  useState(false);

 function handleChange(e) {
       setUser({...user,[e.target.name]:e.target.value});
 }
 function handleSubmit(e){
   e.preventDefault();
   
   let userFound = users.find((item)=>item.username === user.username && item.password === user.password);
  

   if (userFound===undefined)
       userFound = false;
   else{
       user.fullName = userFound.fullName;
       userFound = true;
   }
   setIsLoggedIn(userFound);
   if (userFound) {
       setWrongUser(false);
   }
   else{
       setWrongUser(true);
   }
 }


 return (
   <>
   
   <div>
   <form className={login.myForm} onSubmit={(e)=>handleSubmit(e)}>
    <div style={{textAlign:'center'}}>
    <Lock style={{alignItems:'center', backgroundColor:'violet', padding:'9px', color:'white', textAlign:'center', borderRadius:'50%'}}/>
    <h1 className={login.signIn} style={{textAlign:'center'}}>Sign in</h1>
    </div>
     
      <div className={login.inputContainer}>
       <input className={login.username} name="username" onChange={(e)=>handleChange(e)} type='text' placeholder='Email Adress'/>
       <input className={login.password} name="password" onChange={(e)=>handleChange(e)} type='password' placeholder='Password'/>
       <FormControlLabel
        control={<CheckBox  onChange={handleChange} name="checkedA" />}
        label="Remember me"
      />
      
      {/* <button className="btn" type='submit'>Login</button> */}
      <Button style={{marginTop:'9px'}} variant="contained" type='submit'>SIGN IN</Button> 
      </div>
      <Alert  severity="error">{wrongUser ? "wrong username or password" : ""}</Alert>
      {/* <p style={{color:'red'}}>{wrongUser ? "wrong username or password" : ""}</p> */}
      
      <div  className={login.linkContainer}>
      <a style={{textDecoration:'none'}} href="#">Forgot password?</a>
      <a  href="./Register/index">Don't have an account? Sign Up</a>
      </div>
      
      <p style={{textAlign:'center', color:'gray'}}>Copyright © <a href="#" style={{color:'gray'}}>Your Website</a> 2023</p>
   </form>
   </div>
   
   </>
 )
}

export default Login