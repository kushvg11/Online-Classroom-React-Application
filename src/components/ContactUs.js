import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Input from './Input';
import '../styles/form.css';

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar page="home" />
        <div className="container-fluid m-0 p-0">
          <form className="contact-us-form" id="contactUsForm">
            <h2 className="form-heading">Submit Query</h2>
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
            <div className="col-sm-12 p-0">
              <Input type="textArea" name="query" placeholder="Enter Query Description" />
            </div>
            <div className="col-sm-12 p-0">
              <button className="submit" id="submitQuery">Submit Query</button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;