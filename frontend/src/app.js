import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Components
import Mainpage from './mainpage/mainpage';
import ProgramInfo from './message/programinfo';
import Userform from './mainpage/userform';
import UserAccountPage from './components/userAccount/UserAccountPage';
import Footer from './components/Footer';

// css
import '../public/css/main.css';

const App = React.createClass({
	render(){
		return(
      <div className="mainPage">
			{this.props.children}
			<Footer />
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
			<Route path="/account" component={UserAccountPage} />
		</Route>
	</Router>,
  document.getElementById('root')
)
