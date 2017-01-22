// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Components
import Mainpage from './mainpage/mainpage'
import Userform from './mainpage/userform'
import MainResult from './results/MainResult'


const App = React.createClass({
	render(){
		return(

      <div>
      <Mainpage />
        <div style = {{height: 50}}>
        </div>
      <Userform />
        {this.props.children}

      </div>
		)
	}
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* <IndexRoute /> */}
    </Route>
			<Route path="/result" component={MainResult} />
	</Router>,
  document.getElementById('root')
)
