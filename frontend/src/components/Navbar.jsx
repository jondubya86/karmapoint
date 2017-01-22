import React from 'react';

const Navbar = React.createClass({
  render: function() {
    return (
      <nav>
        <ul>
          <li>my account</li>
          <li>profile</li>
          <div className="karmaPoint">
            <i className="fa fa-star" aria-hidden="true"></i>
            <p>256</p>
          </div>
        </ul>
      </nav>
    )
  }
})

export default Navbar;
