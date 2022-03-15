import React, { useState } from 'react'

function LoginForm ({Login, error}) {
    const [details, setDetails] = useState({
        email: "", 
        password: ""
    })

    const submitHandler = async e => {
        e.preventDefault()
        fetch('/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(details)
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
    }

  return (
    <form onSubmit={submitHandler}> 
        <div className='form-inner'>
            <h2>Login</h2>
            { (error !== "") ? ( <div className='error'> {error} </div>) : "" }

            
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
                        
                        <input type="submit" value="Login"></input>
         </div>
    </form>
  )
}

export default LoginForm