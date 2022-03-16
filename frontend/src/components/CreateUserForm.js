import React, { useState } from 'react'
import { Link } from "react-router-dom"

function CreateUserForm () {
    const [message, setMessage] = useState ("");

    const [details, setDetails] = useState({
        name: "", 
        email: "",
        password: "",
        tractor: ""
    })



    const submitHandler = async e => {
        e.preventDefault()
        fetch("/api/users", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(details)
          })
          .then((response) => {
            return response.json()
        })
        .then((data) => {
            setMessage(data.message)
            })
    }

  return (
    <form onSubmit={submitHandler}> 
        <div className='form-inner'>
            <h2>Skapa ny användare</h2>
            <p>Tillbaka till <Link to="/WelcomePage">login</Link></p>    
            <div className='errorMessage'>
                 {message}
             </div>
            <div className='form-group'>
                <label htmlFor='name'>Namn:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} required></input>
            </div>
                 <div className='form-group'>
                     <label htmlFor='email'>
                         Mail:
                         </label>
                         <input type="email" name="email" id="email"
                         onChange={e => setDetails({...details, email: e.target.value.toLowerCase()})} value={details.email} required>
                        </input> 
                </div>
                        <div className="form-group">
                        <label htmlFor='password'>
                            Lösenord:
                        </label>    
                        <input type="password" name="password" id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required></input>
                        </div>
                        <div className='form-group'>
                     <label htmlFor='tractor'>
                         Är du en traktor?
                         </label>
                         <input type="text" name="tractor" id="tractor"
                         onChange={e => setDetails({...details, tractor: e.target.value})} value={details.tractor} required>
                        </input>
                        </div>
                        <input type="submit" value="Registrera"></input>
         </div>
    </form>
  )
}

export default CreateUserForm