import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Input from './Input';
import global from '../Config';
import '../styles/form.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      userType: "",
      email: "",
      password: ""
    }
  }

  radioButtonHandler(event) {
    if (event.target.id === "student") {
      this.setState({
        userType: "Student"
      });
    }
    else if (event.target.id === "teacher") {
      this.setState({
        userType: "Teacher"
      });
    }
  }

  changeHandler(event) {
    event.preventDefault();
    if (event.target.name === "email") {
      this.setState({
        email: event.target.value
      });
    }

    if (event.target.name === "password") {
      this.setState({
        password: event.target.value
      });
    }
  }

  loginButtonHandler(event) {
    event.preventDefault();
    console.log(global.API_BASE_URL);

    Axios.get(global.API_BASE_URL + "/api/students", {
      auth: {
        username: "kushal",
        password: "Kushal@123"
      }
    }).then(response => {
      console.log(response.data);
      this.setState({
        users: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <>
        <Header />
        <Navbar page="home"/>
        <div className="container-fluid m-0 p-0">
          <form className="login-form" id="loginForm">
            <h2 className="form-heading">User Login</h2>
            <div className="col-sm-12 m-0 mb-4 options row">
              <legend>Choose User Type</legend>
              <div className="col-sm-6 p-0">
                <input type="radio" name="option" id="student" defaultChecked={true} onClick={this.radioButtonHandler} />
                <label htmlFor="student">Student</label>
              </div>
              <div className="col-sm-6 p-0">
                <input type="radio" name="option" id="teacher" onClick={this.radioButtonHandler} />
                <label htmlFor="admin">Teacher</label>
              </div>
            </div>
            <div className="col-sm-12 p-0">
              <Input type="text" name="email" placeholder="Enter Email" />
            </div>
            <div className="col-sm-12 p-0">
              <Input type="password" name="password" placeholder="Enter Password" />
            </div>
            <div className="col-sm-12 p-0">
              <button className="submit" id="login" onClick={this.loginButtonHandler}>Login</button>
            </div>
            <div className="row my-1">
              <div className="col-sm-6 links text-center">
                <Link to="/reset-password">Forgot password</Link>
              </div>
              <div className="col-sm-6 links text-center">
                <Link to="/register">Register</Link>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;