// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import Mainpage from './mainpage/mainpage';
import Userform from './mainpage/userform';
import $ from 'jquery';

const App = React.createClass({
	getInitialState(){
		return({
			information: ''
		})
	},
	componentDidMount(){
		$.ajax({
			url: 'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=20',
			type: 'GET'
		})
		.done((info)=>this.setState({information: info}))
	},
	render(){
		return(
			
      <div>
      <Mainpage />
        <div style = {{height: 50}}>
        </div>
      <Userform />
      </div>
		)
	}
})

ReactDOM.render(
	<App />, 
  document.getElementById('root')
)