import React, { Component } from 'react';

export default class random_memes extends Component {

    // state = {
    //     rondoms:[]
    //    }
       constructor(props) {
        super(props);
        this.state = {
            rondoms:[]
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
             this.setState({rondoms:data});
             console.log(this.state.rondoms);
         })
         .catch(console.log);
       }
    render() {
        const { rondoms } = this.state;
        return (
            <section id="services">
            <div className="container wow fadeIn">
                <div className="section-header">
                <h3 className="section-title">Memes</h3>
                <p className="section-description">Random memes</p>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="box">
                    {/* <div className="icon"><a href=""><i className="fa fa-desktop"></i></a></div> */}
                 
       
          {/* {rondoms.map(item => ( */}
            <p className="description">
              {rondoms.joke}   
              </p>
       
    
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="box">
                    {/* <div className="icon"><a href=""><i className="fa fa-bar-chart"></i></a></div> */}
                 
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="box">
                    {/* <div className="icon"><a href=""><i className="fa fa-paper-plane"></i></a></div> */}
               
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="box">
                    {/* <div className="icon"><a href=""><i className="fa fa-photo"></i></a></div> */}
               
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="box">
                    {/* <div className="icon"><a href=""><i className="fa fa-road"></i></a></div> */}

                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="box">
                    {/* <div className="icon"><a href=""><i className="fa fa-shopping-bag"></i></a></div> */}
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                </div>
                </div>

            </div>
            </section>
        )
    }
}
