import React from 'react'
import register from "./index.module.css"
import { Alert, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
   
   <div>
   <form className={register.myForm} onSubmit={(e)=>handleSubmit(e)}>
    <div style={{textAlign:'center'}}>
    <Lock style={{alignItems:'center', backgroundColor:'violet', padding:'9px', color:'white', textAlign:'center', borderRadius:'50%'}}/>
    <h1 className={register.signIn} style={{textAlign:'center'}}>Sign up</h1>
    </div>
     
      <div className={register.inputContainer}>
      <input className={register.username} name="name" onChange={(e)=>handleChange(e)} type='text' placeholder='name'/>
      <input className={register.username} name="surname" onChange={(e)=>handleChange(e)} type='text' placeholder='surname'/>
       <input className={register.username} name="username" onChange={(e)=>handleChange(e)} type='text' placeholder='Email Adress'/>
       <input className={register.password} name="password" onChange={(e)=>handleChange(e)} type='password' placeholder='Password'/>
       <FormControlLabel
        control={<Checkbox  onChange={handleChange} name="checkedA" />}
        label="Remember me"
      />
      
      {/* <button className="btn" type='submit'>Login</button> */}
      <Button style={{marginTop:'9px'}} variant="contained" type='submit'>SIGN UP</Button> 
      </div>
   
      
      <div  className={register.linkContainer}>
      <a style={{textDecoration:'none'}} href="#">Forgot password?</a>
      <a  href="#">Don't have an account? Sign Up</a>
      </div>
      
      <p style={{textAlign:'center', color:'gray'}}>Copyright © <a href="#" style={{color:'gray'}}>Your Website</a> 2023</p>
   </form>
   </div>
   
   </>
  )
}

export default Register