import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Components
import Mainpage from './mainpage/mainpage'
import ProgramInfo from './message/programinfo'

//moved Mainpage and Userform off App-parent component to index route.
//userform imported into mainpage component

const App = React.createClass({
	render(){
		return(
      <div>
			{this.props.children}
      </div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Mainpage}/>
			{/*<Route path="/result" component={App} />*/}
			{/*change path of companyinfo to :programId */}
			<Route path='/program/:programId' component={ProgramInfo} />
		</Route>
	</Router>,
  document.getElementById('root')
)
