import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

  

  constructor() {
    super();

    this.state = {

      //center location of map
      center : {
        lat: 37.3596049, 
        lng: -122.0665
      },

      //how much you want to zoom
      zoom : 16,

      myMarkers : []
    };
    
    let aMarker = {
      name : 'Mountain View High School',
      lat : 37.3605,
      lng : -122.0675,
    }
    this.state.myMarkers.push(aMarker);

    aMarker = {
      name : 'FreeStyle',
      lat : 37.3599588,
      lng : -122.0653,
    }
    this.state.myMarkers.push(aMarker);

    aMarker = {
      name : 'Alta Vista',
      lat : 37.360188,
      lng : -122.064,
    }
    this.state.myMarkers.push(aMarker);

    this.setState( {myMarkers : this.state.myMarkers} );
  }

  
 

  render() {

    //Marker Component
    const Marker = ({text}) => {
        return (
              <div><b>{text}</b></div>
        );
    }

    return (
      <div>

 
     
        <center>
        <div style={ { height: '50vh', width: '90%' } }>

          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBiBGd1wMllwtgMRY2crh7_t_WK7EhqZ54' /*Google API Key goes here */ }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
          >

          
          {
            //Add a list of Markers to Your Map
            this.state.myMarkers.map( (each) =>
              <Marker
                lat = {each.lat}
                lng = {each.lng}
                text = {each.name}
              />
            )
          }

          </GoogleMapReact>
         
        </div> 
        </center>

      </div>
      
    );
  }
}
export default Map;
