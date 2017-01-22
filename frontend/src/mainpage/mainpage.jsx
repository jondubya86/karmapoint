import ReactDOM from 'react-dom';
import React from 'react';
// components
// import UserForm from './userform';
import LandingArea from './LandingArea';

const Mainpage = React.createClass({
  render(){
    return (
        <div>
          <div className="welcome"><h1>welcome back,<span> Carlos</span></h1></div>
          <LandingArea />
          {/* <UserForm /> */}
        </div>
    )
  }
})

export default Mainpage
