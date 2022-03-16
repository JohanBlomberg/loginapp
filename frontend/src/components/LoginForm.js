import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom';

function LoginForm () {
    const navigate = useNavigate();
    const [message, setMessage] = useState ("");

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
            if(data.loggedIn == true) {
                navigate('/loggedIn')
            } else {
                setMessage(data.message)
            }
        })
    }

  return (
    <form onSubmit={submitHandler}> 
        <div className='form-inner'>
            <h1>Välkommen!</h1>
            <h2>Vänligen logga in nedan</h2>
             <div className='errorMessage'>
                 {message}
             </div>
                 <div className='form-group'>
                     <label htmlFor='email'>
                         Mail:
                         </label>
                         <input type="email" name="email" id="email"
                         onChange={e => setDetails({...details, email: e.target.value})} value={details.email}>
                        </input>
                </div>
                        <div className="form-group">
                        <label htmlFor='password'>
                            Lösenord:
                        </label>    
                        <input type="password" name="password" id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                        </div>
                        <input type="submit" value="Logga in"></input>

                        <p>Ny användare? <Link to="/createUser">klicka här</Link></p>   
         </div>
    </form>
  )
}

export default LoginForm