import React, {useState} from 'react'
import LoginForm from './LoginForm'
import CreateUserForm from './CreateUserForm';

function Welcome () {
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('')


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
    <p>New member? click here</p>         
        </div>
    )
}

export default Welcome