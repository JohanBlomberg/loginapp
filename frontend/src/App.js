import React, { useState, useEffect } from 'react'
import CreateUserForm from './components/CreateUserForm';
import Welcome from './components/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoggedIn from './components/LoggedIn';

function App() {
     return (
       <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/createUser" element={<CreateUserForm />}></Route>
        <Route path="/loggedIn" element={<LoggedIn />}></Route>
        <Route path="*" element={<Welcome />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
