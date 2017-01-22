import React from 'react';

// components
import PendingDiv from './PendingDiv';
import CompleteVolunteersDiv from './CompleteVolunteersDiv';
import Navbar from '../Navbar';


const UserAccountPage = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <div className="userAccountCont">
          <h1>Pending Volunteer positions</h1>
          <PendingDiv />
          <h1>Completed tasks</h1>
          <CompleteVolunteersDiv />
        </div>
      </div>
    )
  }
})


export default UserAccountPage;
