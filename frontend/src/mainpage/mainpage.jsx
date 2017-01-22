import ReactDOM from 'react-dom';
import React from 'react';
import Userform from './userform';

const Mainpage = React.createClass({
  render(){
    return(
      <div>
        <div style = {{display: "flex",justifyContent: "center"}}>

          <div style = {{width:800, height: 400, backgroundColor: "red", borderColor: "red",borderWidth: 2 }}>
          here
          </div>

        </div>
        <div style = {{height: 50}}>
        </div>
        <Userform />
       </div>
    )
  }
})

export default Mainpage