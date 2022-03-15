import React, {useState} from 'react'
import { Link } from "react-router-dom"
import LoginForm from './LoginForm'

function Welcome () {
  const [user, setUser] = useState({name: '', email: ''});
 
      const Logout = () => {
        setUser({ name: "", email: ""});
      }
    return (       
        <div>
        <h1>Welcome to Samirs shop, please log in!</h1>
        {(user.email !== "") ? (
       <div className='welcome'>
         <h2>Welcome! <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
         </div>
     ) : (
      <LoginForm/>
     )}
     
    <p>New member? <Link to="/createUser">click here</Link></p>    
    
        </div>
    )
}

export default Welcome