import React from 'react';
import './EditPhotoForm.css';

class EditPhotoForm extends React.Component{
 handleChange = e => {
    // find the current photo in our photo array
    const id = this.props.currentPhoto;
    const photo = this.props.photos.find(p => p.id === id);
      //this is user to make sure that a user enters a proper latitude and longitiude. 
    const regex = /^(\s)|-?(-?\d+(\.\d+)?)$/;

    let flag = true;
    // update the photo using these 3 steps ...

    // 1. make a clone of the current photo object
    const clonedPhoto = { ...photo };
//Error Handling on the Longitude and Latitude
    if (e.currentTarget.name === "latitude") {
      if (e.target.value === "" || e.target.value === "-") {
      } else {
        if (parseFloat(e.target.value) <= 90 && parseFloat(e.target.value) >= -90
        ) {
          if (e.target.value[e.target.value.length - 1] === "." &&
            e.target.value.split(".").length - 1 === 1 ) {
          } else if (regex.test(e.target.value)) {
          } else {
            flag = false;
          }
        } else {
          flag = false;
        }
      }
    } else if (e.currentTarget.name === "longitude") {
      if (
        e.target.value[e.target.value.length - 1] === "." &&
        e.target.value.split(".").length - 1 === 1) {
      } else if (e.target.value === "" || e.target.value === "-") {
      } else {
        if (
          parseFloat(e.target.value) <= 180 &&
          parseFloat(e.target.value) >= -180
        ) {
          if (regex.test(e.target.value)) {
          } else {
            flag = false;
          }
        } else {
          flag = false;
        }
      }
    }
      
    if (flag) {
      // 2. update value of field that just changed
      clonedPhoto[e.currentTarget.name] = e.currentTarget.value;

      // 3. tell parent (or above) to update the state for this photo
      this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
    }
  };

  render() {
    const id = this.props.currentPhoto;
    const imgURL = `https://storage.googleapis.com/comp4513-asg2-bucket/photos/large/`;
    // just in case, handle missing photos in the props
    if (this.props.photos.length > 0) {
      // find the photo object with this id
      let photo = this.props.photos.find(p => p.id === id);

      if (photo === undefined) {
        photo = this.props.photos[0];
        this.props.updateCurrent(photo.id);
      }
      return (
        <article className="details">
          <div className="detailsPhotoBox">
            <form className="photoForm">
              <legend>Edit Photo Details</legend>
              <img src={imgURL + photo.filename} alt={photo.title} />
              <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={this.handleChange}
                value={photo.title}
              />
              <label>Description</label>
              <input
                type="text"
                name="description"
                onChange={this.handleChange}
                value={photo.description}
              />
              <label>City</label>
              <input
                type="text"
                name="city"
                onChange={this.handleChange}
                value={photo.location.city}
              />

              <label>Country</label>
              <input
                type="text"
                name="country"
                onChange={this.handleChange}
                value={photo.location.country}
              />
              <div className="form-row align-items-center">
                <div className="col-auto">
                  <label>Latitude</label>
                  <input
                    type="text"
                    name="latitude"
                    onChange={this.handleChange}
                    value={photo.location.latitude}
                  />
                </div>
                <div class="col-auto">
                  <label>Longitude</label>
                  <input
                    type="text"
                    name="longitude"
                    onChange={this.handleChange}
                    value={photo.location.longitude}
                  />
                </div>
              </div>
            </form>
            <button className="ourButton" onClick={this.setView}>
              View
            </button>
            <button className="ourButton" onClick={this.setMap}>
              Map
            </button>
          </div>
        </article>
      );
    } else {
      return null;
    }
  }

    // function for calling the parent setView to change the view to Photo View with the current Photo id. 
    setView = () =>{
        this.props.setView(this.props.currentPhoto);
    }

    // function for calling the parent set map to change the view to Map View with the current Photo id. 
    setMap = () => {
        this.props.setMap(this.props.currentPhoto);
    }

  

}

export default EditPhotoForm;