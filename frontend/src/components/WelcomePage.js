import React, {useState} from 'react'
import LoginForm from './LoginForm'
import CreateUserForm from './CreateUserForm';

function Welcome () {
    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
      }
    
      

      const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('')

  const Login = details => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
    setUser({
      name: details.name,
      email: details.email
    })
  }
    else {
        setError('Details do not match')
    }
      } 

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
      <LoginForm Login={Login} error={error}/>
     )}
    <p>New member? click here</p> 

        {/* {(user.email !== "") ? (
       <div className='welcome'>
         <h2>Welcome! <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
         </div>
     ) : (
      <LoginForm Login={Login} error={error}/>
     )}
     */}
        
        </div>
    )
}

export default Welcome