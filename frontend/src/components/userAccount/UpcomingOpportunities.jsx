import React from 'react';

// components
// import IndividualPending from './IndividualPending';

const UpcomingOpps = React.createClass({
  render: function() {
    return (
      <div className="upcomingCont">
        <div className="individualOpps">
          <div className="servTitle">
            <h3>Basic Needs Program</h3>
            <p>by Aids Service Center Of New York City Inc</p>
          </div>
          <p className="oppPara">Basic Needs Program provides free meals, groceries, emergency assistance and clothing bank to families in need. These programs help stabilize clients so that they may maximize their use of ASCNYCs broad range of services. Our top priority is ensuring that our clients have adequate food, shelter and clothing.</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>food pantry, free meals, clothing, temporary shelter</p>
          </div>
          <div>
            <button>Contact</button>
          </div>
        </div>
        <div className="individualOpps">
          This is the Individual Opps component
        </div>
        <div className="individualOpps">
          This is the Individual Opps component
        </div>
      </div>
    )
  }
})

export default UpcomingOpps;
