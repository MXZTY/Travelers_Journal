import React from "react";
import "./EditPhotoForm.css";
import MapContainer from "./Map.js";

class PhotoMap extends React.Component {

  constructor(props){
    super(props);
    this.state={
      lat:0,
      long:0,
      photos: this.props.photos,
    };
  }

  //calculate distance between photo location and user location
  //credit: haversine formula
  calculateDist = (lat1, lat2, lon1, lon2) => {
    function toRad(Value) {
      /** Converts numeric degrees to radians */
      return (Value * Math.PI) / 180;
    }
    let R = 6371e3; // metres
    let φ1 = toRad(lat1);
    let φ2 = toRad(lat2);
    let Δφ = toRad(lat2 - lat1);
    let Δλ = toRad(lon2 - lon1);

    let a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return ((R * c)/1000).toFixed(2);//to km
  };

  

  render() {

    //get current photo
    const id = this.props.currentPhoto;
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;

    if (this.state.photos.length > 0) {
      //return the photo path from the id
      const photo = this.state.photos.find(p => p.id === id);

      return (
        <article className="details flex-box">
          <div className="mapView">
            <div className="mapElement">
              <MapContainer
                city={photo.city}
                containterElement={<div/>}
                lat={photo.latitude}
                long={photo.longitude}
                zoom={16}
              />
            </div>
            <div className="mapInfo">
              <img src={imgURL + photo.path} alt={photo.title} />
              <h1>{photo.title}</h1>
              <h1>
                {photo.city}, {photo.country}
              </h1>
              <h1>
                {this.calculateDist(photo.latitude, this.props.userLat, photo.longitude, this.props.userLong)} KM from current location
              </h1>
              <br />
              <button onClick={this.setView}>View</button>
              <button onClick={this.setEdit}>Edit</button>
            </div>
          </div>
        </article>
      );
    } else {
      return null;
    }
  }

  setView = () =>{
    this.props.setView(this.props.currentPhoto);
  }

  setEdit = () => {
    this.props.setEdit(this.props.currentPhoto);
  }


}

export default PhotoMap;
