import React, {Component} from 'react'
import Map from './map';
import {APIcall,filterOutLocation} from '../../../../backend/seed/exAPI.js'

// css
// import '../public/css/main.css';

const MapContainer = React.createClass ({
  getInitialState(){
    return ({data:APIcall})
  },
  componentDidMount(){
    const arr=[]
    APIcall.programs.map((a)=>{return a.offices.map((b)=>{
    return arr.push(b.location)
  })
})
    // let markerz = APIcall.programs.map((a)=>{return a.offices.map((b)=>{return b})})
    // this.state.data.programs.map((a)=>this.setState({data:a.offices}))
    // console.log(this.state.data.programs.map((a)=>{a.offices}))
    // console.log('filter',filterOutLocation)
  },
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
    <div style={{width: 600, height: 600, background:'red'}}>
      <Map center={ location } markers={markers}/>
    </div>
    )

  }
})

export default MapContainer;
