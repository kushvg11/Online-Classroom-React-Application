import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Input from './Input';
import '../styles/form.css';

class ResetPassword extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar page="home" />
        <div className="container-fluid m-0 p-0">
          <form className="reset-password-form" id="resetPasswordForm">
            <h2 className="form-heading">Reset Password</h2>
            <div className="col-sm-12 m-0 mb-4 options row">
              <legend>Choose User Type</legend>
              <div className="col-sm-6 p-0">
                <input type="radio" name="option" id="student" defaultChecked={true} />
                <label htmlFor="student">Student</label>
              </div>
              <div className="col-sm-6 p-0">
                <input type="radio" name="option" id="teacher" />
                <label htmlFor="admin">Teacher</label>
              </div>
            </div>
            <div className="col-sm-12 p-0">
              <Input type="text" name="email" placeholder="Enter Email" />
            </div>
            <div className="col-sm-12 p-0 hide-input">
              <Input type="password" name="password" placeholder="Enter New Password" />
            </div>
            <div className="col-sm-12 p-0 hide-input">
              <Input type="password" name="password2" placeholder="Confirm New Password" />
            </div>
            <div className="col-sm-12 p-0 hide-input">
              <button className="submit" id="resetPassword">Reset Password</button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default ResetPassword;