import React from 'react';

// components
import IndividualComplete from './IndividualComplete';

const CompleteVolunteersDiv = React.createClass({
  render: function() {
    return (
      <div className="completeCont">
        <IndividualComplete />
        <IndividualComplete />
        <IndividualComplete />
      </div>
    )
  }
})

export default CompleteVolunteersDiv;
