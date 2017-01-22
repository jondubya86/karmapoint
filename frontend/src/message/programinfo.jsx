var React = require('react');
var singleProgram = require('../../../backend/seed/exAPI.js');
var APIkey = require('../../../APIkey');

const ProgramInfo = React.createClass({
	getInitialState(){
		return({
			programInfo:''
		})
	},
	componentDidMount(){
		//can do search with program_numeric_id as params
		//zipcode will stay 10001
		//https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/{zipcode}/programs/{program_id}?api_key={APIkey}
		this.setState({
			programInfo: singleProgram.programs[0]
		})
	},
	render(){
		console.log(this.state.programInfo)
			if(this.state.programInfo){
				let info = this.state.programInfo;
				return(
					<div>
						<h2>{info.name}</h2>
						<h3>by {info.provider_name}</h3>
						<p>{info.description}</p>
						<p><strong>Services this program provides:</strong></p>
						{info.service_tags.join(', ')}
						<br/><br/>
						<button>Apply to volunteer</button>

						
					</div>
				)
			}else{
				return(
					<p>loading...</p>
				)
			}	
	}
})

export default ProgramInfo