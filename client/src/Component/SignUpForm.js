import React from "react";

function SignUpForm(){

  // What is needed for signup page
  // "email"
  // "username"
  // "password_digest"


  return(
    <div>
      <div className="signup-form">
      <h5>Sign Up</h5>
      {/* {error ? <p className="login-error"><b><i><u>{error.errors.map(error => <>{error}<br/></>)}</u></i></b></p>: null} */}
      <div className="signup">
        <form>
        <label className="left">Username</label>
      <input 
          id="name" 
          name="name" 
          placeholder="John Doe" 
          type="text"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          ></input>
        <label className="left">Email</label>
        <input 
          id="email" 
          name="email" 
          placeholder="JohnDoe@email.com" 
          type="text"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ></input>
        <label className="left">Password</label>
        <input 
          name="password" 
          placeholder="Password" 
          // type={show}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          ></input>
        <label className="left">Confirm Password</label>
        <input 
          name="password-confirmation" 
          placeholder="Confirm Password" 
          // type={show}
          // value={passwordConfirmation}
          // onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
      <br/>
      <br/>
      {/* <button className="show-pass z-depth-3" onClick={e => showPass(e)}>SHOW PASSWORD?</button> */}
      <br/>
      {/* <button className="login-signup z-depth-3" onClick={e => handleSubmit(e)}>SIGN UP</button> */}
      </form>
      </div>
      <p><b><u>Already have an account?</u></b></p>
      {/* <button onClick={()=> setForm(true)} className="switch-form">LOGIN</button> */}
    </div>
    </div>
  )
}

export default SignUpForm