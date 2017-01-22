import React, {Component} from 'react';

export default class Map extends Component {
	render() {
		const location = {
			lat: 40.7575285,
			lng:-73.9884469
		}
		const markers=[
			{location: 
				{lat: 40.7575285,
				lng:-73.9884469}
			}
		]
	return(
		<div style={{width: 300, height: 600, background:'red'}}>
			<Map center={ location } markers={markers}/>
		</div>

		)
	}
};