import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery'

const ResultItem = React.createClass({
  componentDidMount(event){
    console.log(this.state)
    // event.preventDefault()
    // let data = {
    //   name: this.state.name,
    //   zip: this.state.zip,

    // }
    // 75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20
    // 5
    $.ajax({
      url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20',
      type: 'GET',
    })
    .done(function(data){
      console.log(data)
    })

    
    // this.setState({
    //   : final
    // })

    // console.log(this.state)
    // this.props.router.push('/result')
  },

  render(){
    return(
      
        <div>
          <div>
          here hoe
          </div>
        </div>

    )
  }
})

export default ResultItem