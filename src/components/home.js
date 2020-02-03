import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ClipLoader from "react-spinners/ClipLoader";
import {Link}   from 'react-router-dom';



export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rondoms:[],
            loading:true,
            error:null
        };
      }
       componentDidMount () {
         fetch('https://icanhazdadjoke.com/',
        {
        headers : { 
            'Accept': 'application/json'
            }
        }
         )
         .then(res => res.json())
         .then((data)=>{
             this.setState({loading:false,
                rondoms:data});
             console.log(this.state.rondoms);
         },(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
         .catch(console.log);
       }
  
    render() {
        const { error, loading,rondoms } = this.state;
      

        if (error) {
            return (
                <div>
                    <Header/>
                        <section id="hero">
                                    <div className="hero-container">
                                    <h1>Welcome to Memes</h1>
                                    <h2>Error: {error.message}</h2>
                                    <Link className="btn-get-started" to="/memes">let's smile together</Link>
                                    </div>
                             
                            </section>
                        <footer id="footer">
                            <div className="footer-top">
                            <div className="container">
    
                            </div>
                            </div>
    
                            <div className="container">
                            {/* <div class="copyright">
                                &copy; Copyright <strong>Regna</strong>. All Rights Reserved
                            </div>
                            <div className="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div> */}
                            </div>
                        </footer>
                </div>
            )
          } else if (loading) {
            return (
                <div>
                    <Header/>
                        <section id="hero">
                                    <div className="hero-container">
                                    <h1>Welcome to Memes</h1>
                                    <div className="sweet-loading">
                                    <ClipLoader
                                    
                                    size={50}
                                    //size={"150px"} this also works
                                    color={"#123abc"}
                                    loading={this.state.loading}
                                    />
                                     </div>
                                    <Link className="btn-get-started" to="/memes">let's smile together</Link>
                                    </div>
                             
                     </section>
                        <footer id="footer">
                            <div className="footer-top">
                            <div className="container">
    
                            </div>
                            </div>
    
                            <div className="container">
                            {/* <div class="copyright">
                                &copy; Copyright <strong>Regna</strong>. All Rights Reserved
                            </div>
                            <div className="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div> */}
                            </div>
                        </footer>
                </div>
            )
          } else {
            return (
                <div>
                    <Header/>
                        <section id="hero">
                                    <div className="hero-container">
                                    <h1>Welcome to Memes</h1>
                                    <h2>{rondoms.joke}</h2>
                                    <Link className="btn-get-started" to="/memes">let's smile together</Link>
                                    </div>
                             
                            </section>
                     {/* <Footer/> */}
                </div>
            )
          }
        }
    }
  



