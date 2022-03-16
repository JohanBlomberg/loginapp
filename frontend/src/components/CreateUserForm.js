import React, { useState } from 'react'
import { Link } from "react-router-dom"

function CreateUserForm ({CreateUser, error}) {
    const [message, setMessage] = useState ("");

    const [details, setDetails] = useState({
        name: "", 
        email: "",
        password: "",
        bread: ""
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
            <h2>Create new User</h2>
            <p>Back to <Link to="/WelcomePage">login</Link></p>    
            <div className='errorMessage'>
                 {message}
             </div>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
            </div>
                 <div className='form-group'>
                     <label htmlFor='email'>
                         Email:
                         </label>
                         <input type="email" name="email" id="email"
                         onChange={e => setDetails({...details, email: e.target.value.toLowerCase()})} value={details.email}>
                        </input> 
                </div>
                        <div className="form-group">
                        <label htmlFor='password'>
                            Password:
                        </label>    
                        <input type="password" name="password" id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                        </div>
                        <div className='form-group'>
                     <label htmlFor='bread'>
                         Do you like bread?:
                         </label>
                         <input type="text" name="bread" id="bread"
                         onChange={e => setDetails({...details, bread: e.target.value})} value={details.bread}>
                        </input>
                        </div>
                        <input type="submit" value="Create"></input>
         </div>
    </form>
  )
}

export default CreateUserForm