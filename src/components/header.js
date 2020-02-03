import React, { Component } from 'react';
import {Link}   from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <header id="header">
            <div className="container">
            <div id="logo" className="pull-left">
                {/* <a href=""><img src="img/logo.png" alt="" title="" /></a> */}
                <h2 >memes</h2>
            </div>
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                <li className="menu-active"><Link to="/">Home</Link></li>
                <li><a href="">About Us</a></li>
                {/* <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li> */}
                <li><a href="">Team</a></li>
                {/* <li className="menu-has-children"><a href="">Drop Down</a>
                    <ul>
                    <li><a >Drop Down 1</a></li>
                    <li className="menu-has-children"><a href="#">Drop Down 2</a>
                        <ul>
                        <li><a >Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                    </ul>
                </li> */}
                <li><a href="">Contact Us</a></li>
                </ul>
            </nav>
            </div>
        </header>
        )
    }
}
