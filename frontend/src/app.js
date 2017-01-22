// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Components
import Container from './results/maps/mapContainer'
// import Map from './results/maps/ComponentToPass'
import Mainpage from './mainpage/mainpage';
import Userform from './mainpage/userform';
import UserAccountPage from './components/userAccount/UserAccountPage';
import Footer from './components/Footer';

// css
import '../public/css/main.css';

const App = React.createClass({
	render() {
		const location = {
			lat: 40.7575285,
			lng:-73.9884469
		}
		const markers=[
			{location: 
				{lat: 40.7575285,
				lng:-73.9884469}
			}
		]
	return(
		<div style={{width: 300, height: 600, background:'red'}}>
			<Map center={ location } markers={markers}/>
		</div>
		)
	}
});

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Mainpage}/>
			{/* <Route path="/result" component={ResultPage} /> */}
			<Route path="/account" component={UserAccountPage} />
		</Route>
	</Router>,
  document.getElementById('root')
)
