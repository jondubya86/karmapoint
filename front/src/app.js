// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';


const App = React.createClass({
	render(){
		return(
			<div>Hello from app.js</div>
		)
	}
})

ReactDOM.render(
	<App />, 
  document.getElementById('root')
)