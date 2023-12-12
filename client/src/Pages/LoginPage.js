import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/user";
import LoginForm from "../Component/LoginForm";
import SignUpForm from "../Component/SignUpForm";

function LoginPage(){
  const {user, setUser} = useContext(UserContext)
  const history = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function handleLogout(){
    fetch("/logout",{
      method: "DELETE"
    }).then(res =>{
      if(res.ok){
        setUser(null)
      }
    })
    history("/")
  }

  return(
    <div>
      LoginPage
      <SignUpForm />
      <LoginForm setUser={setUser}/>

      <button onClick={handleSubmit}>Get data</button>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default LoginPage