import ReactDOM from 'react-dom';
import React from 'react';
import ResultItem from './resultItem';
import MapContainer from './maps/mapContainer';
import Map from './maps/map';


const Mainresult = React.createClass({
  render(){
    return(
        <div style = {{display: "flex",flexDirection: "column", justifyContent: "center"}}>
        	<MapContainer />
        	<br />
        	<ResultItem />
        	</div>
    )
  }
})

export default Mainresult