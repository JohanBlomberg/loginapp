import React, { useState, useEffect } from 'react'
import CreateUserForm from './components/CreateUserForm';
import Welcome from './components/WelcomePage';

function App() {
    const [data, setData] = useState(null);
  

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('')

  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  const CreateUser = newUser => {
    console.log(newUser)
    setUser({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
  }


  return (
    <div className="App">
      <Welcome />
      <CreateUserForm />
    </div>
    
  );
}

export default App;
