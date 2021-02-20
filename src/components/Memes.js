import React, { useEffect,useState } from 'react';
import Header from './header';
import Footer from './footer';
import Pic from './../assets/images/back6.jpg';
import DotLoader from "react-spinners/DotLoader";
import Pagination from "react-js-pagination";
import {connect} from 'react-redux'
import {allMemeAction} from '../actions'
import Skeleton from 'react-loading-skeleton';


const Memes = (props) => {
const [pageNumber,setPageNumber]=useState(1)
  const handlePageChange=(pageNo)=>{
    setPageNumber(pageNo)
    props.allMemeAction(pageNo)

  }

 useEffect(()=>{
  props.allMemeAction()
},[])
var memes =[]
if(props.memes){
 let mm= props.memes
   const  result = mm.find(meme=>meme.current_page===pageNumber)
   memes = result?result.results:[];
}
const {currect_page} =props
const memesList =memes.map(meme=>
  <div className="col-md-6" key={meme.id}>
  <div className="card mb-2">
  <div className="p-3">
    <p className="card-text p-2">{meme.joke}</p>
  </div>
  </div>
  </div>
)


const loader = memes.length!==20?'block':'none'
const content =memes.length!==20?'none':'block'

  return (
    <div>
      <Header/>
      <div style={{ display:`${content}` }}>
        <div className="row memes_card ">
           {memesList}
        </div>
        <div className="d-flex justify-content-center">
             <Pagination
             activePage={currect_page}
             itemsCountPerPage={20}
             totalItemsCount={450}
             pageRangeDisplayed={7}
             onChange={handlePageChange}
             itemClass='page-item'
             linkClass='page-link'
             />
        </div>
      </div>
      <div style={{ display:`${loader}` }}>
      
                 <div className='container-fluid memes_card'>
                 <Skeleton count={15}/>
                 </div>
      </div>
    </div>
  )
}

const mapStateToProps =state =>{
  return {memes:state.memes}
}

export default connect(mapStateToProps,{allMemeAction})(Memes)
