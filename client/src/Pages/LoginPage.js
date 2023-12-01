import React from "react";
import LoginForm from "../Component/LoginForm";
import SignUpForm from "../Component/SignUpForm";

function LoginPage({setUser}){

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return(
    <div>
      LoginPage
      <SignUpForm />
      <LoginForm setUser={setUser}/>

      <button onClick={handleSubmit}>Get data</button>

    </div>
  )
}

export default LoginPage