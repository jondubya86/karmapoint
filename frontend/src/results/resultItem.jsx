import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router'
var Bertha = require('../../../backend/seed/exAPI')

const ResultItem = React.createClass({
  getInitialState(){
    return{
      programs: null,
      numericId: null
    }
  },
  componentDidMount(event){

    $.ajax({
      url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=15',
      type: "GET",
      
    })
    .done((data)=>{
        let final = data.programs
        this.setState({programs: final})
    })
  },
  render(){
    return(
        <div>
          <div style ={{display: "flex", flexWrap: "wrap"}}>
            {this.state.programs ? this.state.programs.map(function(a,b){
              return <h5 style = {{display:"flex", justifyContent: 'center', width:250,height: 50, backgroundColor: "#196cfc", borderRadius: 5, marginLeft:  10, marginRight: 10, color: 'white'}}key = {b}> <Link style = {{color: 'white'}}to= { '/program/' + a.program_numeric_id}> {a.name}</Link> </h5>

            }): <h5> Loading </h5>  
            }          
          </div>
        </div>
    )
  }
})

export default ResultItem