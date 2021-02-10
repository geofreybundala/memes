import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Pic from './../assets/images/back6.jpg';
import DotLoader from "react-spinners/DotLoader";
import Pagination from "react-js-pagination";
import {connect} from 'react-redux'
import {allMemeAction} from '../actions'


// export default class Memes extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           all_memes:[],
//           loading:true,
//           error:null,
//           activePage: 1,
//           itemsCountPerPage:1,
//           totalItemsCount:1
//         };
//         this.handlePageChange= this.handlePageChange.bind(this);
//       }
//       get_http_data(){
//         fetch(`https://icanhazdadjoke.com/search`,
//         {
//         headers : { 
//             'Accept': 'application/json'
//             }
//         }
//          )
//          .then(res => res.json())
//          .then((data)=>{
//             this.setState({loading:false,
//                 all_memes:data.results});
//          },(error) => {
//           this.setState({
//             loading: true,
//             error
//           });
//         })
//          .catch(console.log);
//       }
//       handlePageChange(pageNumber) {
//          this.setState({loading: true});
//         fetch(`https://icanhazdadjoke.com/search?page=${pageNumber}`,
//         {
//         headers : { 
//             'Accept': 'application/json'
//             }
//         }
//          )
//          .then(res => res.json())
//          .then((data)=>{
//             this.setState({
//                 loading:false,
//                 all_memes:data.results,
//                 activePage:data.current_page
//               });
//          },(error) => {
//           this.setState({
//             loading: true,
//             error
//           });
//         })
//          .catch(console.log);
//       }
//        componentDidMount () {
//           this.get_http_data();
//        }
//     render() {
//         const { error,loading,all_memes} = this.state;
//         if (error) {
//           return (
//             <div>
//                 <Header/>
//                 <div className='container-fluid memes_card'><p className='text-center '>poor Enternet connection,Please try again</p></div>
//             </div>
//           )
//         } else if (loading) {
//             return (
//                 <div>
//                     <Header/>
//                     <div className='container-fluid memes_card'>
//                     <div className="sweet-loading d-flex justify-content-center pt-3">
//                     <DotLoader
//                     size={50}
//                     color={"lime"}
//                     loading={this.state.loading}/>
//                     </div>
//                         </div>
//                 </div>
//               )
//         } else {
//             const listmeme = all_memes.map((meme) =>
//             <div className="col-md-6">
//             <div className="card mb-2">
//             <div className="p-3">
//               <p className="card-text p-2">{meme.joke}</p>
//             </div>
//             </div>
//             </div>
//           );
//           return (
//       <div>
//             <Header/>
//             <div className="row memes_card ">
//             {listmeme}
             
//             </div>

//             <div className="d-flex justify-content-center">
//               <Pagination
//               activePage={this.state.activePage}
//               itemsCountPerPage={20}
//               totalItemsCount={450}
//               pageRangeDisplayed={7}
//               onChange={this.handlePageChange}
//               itemClass='page-item'
//               linkClass='page-link'
//               />
//             </div>
//      </div>
//           );
//         }

//     }
// }



const Memes = (props) => {

  const handlePageChange=()=>{

  }

useEffect(()=>{
  props.allMemeAction()
},[])

const {currect_page} =props
const memes= props.memes?props.memes.results:[]
const memesList =memes.map(meme=>
  <div className="col-md-6" key={meme.id}>
  <div className="card mb-2">
  <div className="p-3">
    <p className="card-text p-2">{meme.joke}</p>
  </div>
  </div>
  </div>
)


  return (
    <div>
      <Header/>
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
  )
}

const mapStateToProps =state =>{
  console.log(state.memes[0])
  return {memes:state.memes[0]}
}

export default connect(mapStateToProps,{allMemeAction})(Memes)
