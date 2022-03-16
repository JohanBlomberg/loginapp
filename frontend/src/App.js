import React from 'react'
import CreateUserForm from './components/CreateUserForm';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoggedIn from './components/LoggedIn';

function App() {
     return (
       <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/createUser" element={<CreateUserForm />}></Route>
        <Route path="/loggedIn" element={<LoggedIn />}></Route>
        <Route path="*" element={<LoginForm />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
