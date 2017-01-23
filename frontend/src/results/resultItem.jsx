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
    // console.log(this.state.programs)
    // this.setState({programs: Bertha})
    // console.log(this.state.programs)

    $.ajax({
      url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20',
      type: "GET",
      
    })
    .done((data)=>{
      
        let final = data.programs
        console.log(final)

        this.setState({programs: final})
    })
    // event.preventDefault()
    // let data = {
    //   name: this.state.name,
    //   zip: this.state.zip,

    // }
    // 75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20
    // 5
    // $.ajax({
    //   url:

    //   type: 'GET',

    // })
      // success:(data)=>{
      // let programs = data.programs
      // console.log(programs)
      // this.setState({ programs: programs, numericId: programs[0].
      // program_numeric_id
      // })
      // // this.props.router.push('/program/' + this.state.numericId)
      // }
   
    // console.log(this.state)
    // .done(function(data){
    // })
    //   // console.log(this.state.programs)

    
    // this.setState({
    //   : final
    // })

    // console.log(this.state)
    // this.props.router.push('/result')
  },

  render(){


    // console.log(this.state)
    return(
      
        <div>
          <div>
            {this.state.programs ? this.state.programs.map(function(a,b){
              return <h5 key = {b}> <Link to= {'/program/' + a.program_numeric_id}> {a.name}></Link> </h5>
            }): <h5> Loading </h5>  
            }          
          </div>
        </div>

    )
  }
})

export default ResultItem