import React from 'react'
import { Link } from 'react-router-dom';

function LoggedIn () {
      return (       
        <div>
        <h1>Bra jobbat!</h1>
        <button className="link"><Link to="/"> Logga Ut </Link></button>
        </div>
    )
}

export default LoggedIn