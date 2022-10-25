import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Input from './Input';
import '../styles/form.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.radioButtonHandler = this.radioButtonHandler.bind(this);
    this.state = {
      fields: <StudentFields />
    };
  }

  radioButtonHandler(event) {
    if (event.target.id === "student") {
      this.setState({
        fields: <StudentFields />
      });
    }
    else if (event.target.id === "teacher") {
      this.setState({
        fields: <TeacherFields />
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Navbar page="home" />
        <div className="container-fluid m-0 p-0">
          <form className="register-form" id="registerForm">
            <h2 className="form-heading">User Register</h2>
            <div className="col-sm-12 m-0 mb-4 options row">
              <legend>Choose User Type</legend>
              <div className="col-sm-6 p-0">
                <input type="radio" name="option" id="student" defaultChecked={true} onClick={this.RadioButtonHandler} />
                <label htmlFor="student">Student</label>
              </div>
              <div className="col-sm-6 p-0">
                <input type="radio" name="option" id="teacher" onClick={this.radioButtonHandler} />
                <label htmlFor="admin">Teacher</label>
              </div>
            </div>
            <div className="row register">
              <div className="col-sm-6">
                <Input type="text" name="firstName" placeholder="Enter First Name" />
              </div>
              <div className="col-sm-6">
                <Input type="text" name="lastName" placeholder="Enter Last Name" />
              </div>
            </div>
            {this.state.fields}
            <div className="row register">
              <div className="col-sm-6">
                <Input type="text" name="email" placeholder="Enter Email" />
              </div>
              <div className="col-sm-6">
                <Input type="text" name="phoneNumber" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className="row register">
              <div className="col-sm-6">
                <Input type="password" name="password" placeholder="Enter Password" />
              </div>
              <div className="col-sm-6">
                <Input type="password" name="password2" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="col-sm-12 p-0">
              <button className="submit" id="register">Register</button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

class StudentFields extends React.Component {
  render() {
    return (
      <div className="row register">
        <div className="col-sm-6 date">
          <Input type="date" name="dob" min="2000-01-01" max="2015-12-31" />
        </div>
        <div className="col-sm-6">
          <Input type="select" name="grade" placeholder="Select Grade" />
        </div>
      </div>
    );
  }
}

class TeacherFields extends React.Component {
  render() {
    return (
      <div className="row register">
        <div className="col-sm-6 date">
          <Input type="date" name="doj" min="1990-01-01" max="2010-12-31" />
        </div>
        <div className="col-sm-6">
          <Input type="select" name="subject" placeholder="Select Subject" />
        </div>
      </div>
    );
  }
}

export default Register;