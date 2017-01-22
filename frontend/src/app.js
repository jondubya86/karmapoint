import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, Link,IndexRoute} from 'react-router';
// import ResultItem from './results/res7'
// Components
import Mainpage from './mainpage/mainpage';
import MainResult from './results/resultItem';
import Userform from './mainpage/userform';
import AdminPage from './components/admin/AdminPage';
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
			<Route path="/company" component={AdminPage} />
		</Route>
			<Route path="/result" component={MainResult} /> 
	</Router>,
  document.getElementById('root')
)
