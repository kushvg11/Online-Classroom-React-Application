import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/home.css'

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar page="home" />
        <Carousel />
        <Features />
        <AboutUs />
        <Footer />
      </>
    );
  }
}

class Carousel extends React.Component {
  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <div className="container-carousel carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" className="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
            <li data-target="#carousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block img-carousel" id="first" src="../images/image1.jpeg" alt="1" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-carousel" id="second" src="../images/image2.jpeg" alt="2" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-carousel" id="third" src="../images/image3.jpeg" alt="3" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-carousel" id="fourth" src="../images/image4.jpeg" alt="4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Features extends React.Component {
  render() {
    return (
      <div id="features" className="container-fluid p-0 m-0 row">
        <h2 className="col-sm-12 content-heading">Features</h2>
        <div className="col-sm-4 pr-0">
          <img src="./images/key-features.jpeg" className="img-features" alt="features" />
        </div>
        <div className="col-sm-8 content mt-3">
          <p>
            1. The Application allows students and teachers to register themselves to access
            the application. It also allows them to authenticate themselves.
          </p>
          <p>
            2. The Application allows students to select a subject of their interest, view the lectures,
            take tests to check their knowledge and view their scores.
          </p>
          <p>
            3. The Application allows teachers to add new subjects, upload lectures for the subjects,
            upload tests and score the tests taken by the students.
          </p>
        </div>
      </div>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    return (
      <div id="about-us" className="container-fluid p-0 m-0 row">
        <h2 className="col-sm-12 content-heading">About Us</h2>
        <div className="col-sm-8 pr-0 content">
          <h3 className="sub-heading">Providing the most actionable App</h3>
          <p>
            This project is focusing the preparation of an online classNameroom web application which intends
            to provides a platform for teachers and students to take their classNamees online.
          </p>
          <p>
            This online classNameroom application allows teachers to upload their lecture s online and allows students to
            select a subject of their interest and view lectures.
          </p>
        </div>

        <div className="col-sm-4 pl-0 text-center">
          <img src="./images/about-us1.jpeg" className="img-about-us" alt="about-us-1" />
        </div>

        <div className="col-sm-4 pr-0 mt-1 text-center">
          <img src="./images/about-us2.jpeg" className="img-about-us" alt="about-us-2" />
        </div>

        <div className="col-sm-8 pl-0 content">
          <h3 className="sub-heading">Our Mission</h3>
          <p>
            The basic objective of this project is to provide a platform for students to register themselves, watch the
            lecture Lectures, choose a subject of their interest and take tests to check their knowledge. The objective
            of this project is also to allow teachers to upload the lecture Lectures and upload the tests to be taken by the
            students.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;