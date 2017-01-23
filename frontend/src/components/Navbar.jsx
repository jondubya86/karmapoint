import React from 'react';

const Navbar = React.createClass({
  render: function() {
    return (
      <nav>
        <p className="brand">Karmapoint</p>
        <ul>
          <li>account</li>
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
