import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,  InfoWindow} from 'google-maps-react';

const mapStyles = {
  width: '40vw',
  height: '40vh',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
      google={this.props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={
        {
          lat: 37.25528520457715, 
          lng: -8.539413223292327
        }
      }
    >
      <Marker
        onClick={this.onMarkerClick}
        name={'Parque da Mina'}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAzE2CnOLxkA6ZqA5ttw_YVTSgTmbqXuO0'
})(MapContainer);