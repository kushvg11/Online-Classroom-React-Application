import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import ResetPassword from './components/ResetPassword';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </Router>
    );
  }
}

export default App;