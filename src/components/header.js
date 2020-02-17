import React, { Component } from 'react';
import {Link}   from 'react-router-dom';
import '../App.css';

export default class header extends Component {
    render() {
        return (
<div className="fixed-top">
  <header className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="social-network">
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-pinterest"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
  </header>
  <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
    <div className="container">
      <a className="navbar-brand"> MEMES</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">

        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">
            <a className="nav-link">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">memes</a>
          </li>

         <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>

        

          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
        //     <header id="header">
        //     <div className="container">
        //     <div id="logo" className="pull-left">
        //         {/* <a href=""><img src="img/logo.png" alt="" title="" /></a> */}
        //         <h2 >memes</h2>
        //     </div>
        //     <nav id="nav-menu-container">
        //         <ul className="nav-menu">
        //         <li className="menu-active"><Link to="/">Home</Link></li>
        //         <li><a href="">About Us</a></li>
              
        //         <li><a href="">Team</a></li>
             
        //         <li><a href="">Contact Us</a></li>
        //         </ul>
        //     </nav>
        //     </div>
        // </header>
        )
    }
}
