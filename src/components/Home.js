import React,{useEffect,useState} from 'react'
 import Header from './header';
import ClipLoader from "react-spinners/ClipLoader";
import {Link}   from 'react-router-dom';
import { connect } from 'react-redux';
import {randomAction} from '../actions'



const Home = (props) => {
    useEffect(()=>{
        props.randomAction()
    },[])

  const joke= props.meme?props.meme.joke:''
  const loader = joke?'none':'block'

    return (
        <div>
            <Header/>
            <section id="hero">
                    <div className="hero-container">
                        <h1>Welcome to Memes</h1>
                    <h2>{joke}</h2>
                            <div className="sweet-loading" style={{ display:`${loader}` }}>
                                <ClipLoader
                                    size={50}
                                    color={"#123abc"}
                                />
                            </div>
                    <Link className="btn-get-started" to="/memes">let's smile together</Link>
                    </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {meme:state.random[0]}
}

export default connect(mapStateToProps,{randomAction})(Home)




