import ReactDOM from 'react-dom';
import React from 'react';
// import apiKey from '../APIkey'
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
// import  from '../results/resultItem'


const Userform = React.createClass({
  getInitilState(){
    return {
      name: '',
      zip: null,
      interest: []
      // education: null,
      // health: null,
      // transit: null,
      // housing: null,
      // food: null
    }
  },

  handleChange( key, event){
    let data = event.target.value
    this.setState({
      [key]: data
    })
    console.log(this.state)
  },

  handleInterest( event){
    let temp = event.target.value
    // let final = [temp]
    
    this.setState({
      interest:this.state.interest.concat(temp)
    })

    // console.log(final)
    console.log(this.state.interest)
  },

  // submitVolunteer(key,event){
  //   console.log(this.state)
  //   event.preventDefault()
  //   // let data = {
  //   //   name: this.state.name,
  //   //   zip: this.state.zip,

  //   // }
  //   // 75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20
  //   // 5
  //   $.ajax({
  //     url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20',
  //     type: 'GET',
  //   })
  //   .done(function(data){
  //     console.log(data)
  //   })

    
  //   // this.setState({
  //   //   : final
  //   // })

  //   console.log(this.state)
  //   this.props.router.push('/result')
  // },


  render(){
    return(
      
        <div style = {{display: 'flex', justifyContent: 'center'}}>
          <div>
            <form onSubmit = {this.submitVolunteer}>
              <div>
                <div>
                  <input onChange = {this.handleChange.bind(this, "name")}placeholder = "name" type = 'text' />
                </div>

                <div>
                  <input onChange = {this.handleChange.bind(this, "zip")}placeholder = "zip"type = 'text' />
                </div> 

                <div>
                  <input onChange = {this.handleChange.bind(this,"interest")}placeholder = "interest"  type = 'text' />
                </div>

                <div>
                  <input onClick = {this.handleInterest} type="checkbox" name="vehicle" value=" Education "/>Education
           
                </div> 

                <div>
                  <input onClick = {this.handleInterest} type="checkbox" name="vehicle" value=" Health "/> Health
                </div>
           
                <div>
                  <input onClick = {this.handleInterest} type="checkbox" name="vehicle" value=" Transit "/> Transit
                </div> 

                <div>
                  <input onClick = {this.handleInterest} type="checkbox" name="vehicle" value="  Housing"/> Housing
           
                </div> 

                <div>
                 <input onClick = {this.handleInterest} type="checkbox" name="vehicle" value=" Food "/> Food 
                </div>
           
                
                <Link to = '/result'><input placeholder = ""type = "submit" /></Link>
              </div>
            </form>
          </div>
         
        </div>

    )
  }
})

export default Userform