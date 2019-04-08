import React, { Component } from "react";
import PhotoList from "./PhotoList.js";
import ViewPhoto from "./ViewPhoto.js";
import EditPhotoForm from "./EditPhotoForm.js";
import PhotoMap from "./PhotoMap.js";
import UploadPhoto from "./UploadPhoto.js"
import { getSecret } from "./actions/actions.js";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import authenticationGuard from "./higherOrderComponents/authenticationGuard.js";
import { Redirect } from "react-router-dom";
import { noConflict } from "q";

class Browse extends Component {
  // default the current photo value to 1, and set the default view to photoview, and no queryValue(filter).
  constructor(props) {
    super(props);
    this.state = {
      photos: props.photos,
      currentPhoto: "3a5c5da5-5a12-4d2b-b0dd-abc28eaf810b" ,
      isEdit: false,
      isMap: false,
        iuUpload: false,
      queryValue: null,
      userLat: 0,
      userLong: 0
    };
  }

  async componentDidMount() {
    getSecret();
  }

  updateCoord = (userLat, userLong) => {
    this.setState({
      userLat,
      userLong
    });
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p => {
        //update Coord
        this.updateCoord(p.coords.latitude, p.coords.longitude);
      });
    }
  };


  // Render the filtered Photo list
  // also conditional rendering based on what view is set in the state (map view, edit view, or photo view)
  render() {
    //get user Location
    this.getLocation();
    if (!this.props.isAuthenticated) {
      console.log("bitch u not authentictaed");
      return(<div>{<Redirect to="/" />}</div>);
      
    } else {
      console.log("bitch u authentictaed");
      console.log("Browser props: ", this.state);

      return (
        <div className="flex-container">
          <section className="flex-container-row">
            <PhotoList
              setView={this.setView}
              setEdit={this.setEdit}
              setMap={this.setMap}
              filterPhotos={this.filterPhotos}
              photos={this.props.photos}
              addImageToFavorites={this.props.addImageToFavorites}
              deletePhoto={this.deletePhoto}
            />
            {!this.state.isEdit && !this.state.isMap ? this.renderView() : null}
            {!this.state.isMap && this.state.isEdit ? this.renderEdit() : null}
            {!this.state.isEdit && this.state.isMap ? this.renderMap() : null}
			{this.state.isUpload ? this.renderUploadForm() : null}
          </section>
        </div>
      );
    }
  }

  // this function returns the EditPhotoForm, and requires the setMap and setView as props to change the view.
  renderEdit = () => {
    return (
      <EditPhotoForm
        photos={this.props.photos}
        currentPhoto={this.state.currentPhoto}
        updatePhoto={this.props.updatePhoto}
        setMap={this.setMap}
        setView={this.setView}
      />
    );
  };

 // this function returns the UploadPhoto so that users can add photos to PhotoList 
  renderUploadForm = () => {
     
    return (
      <UploadPhoto
     
      />
    );
  };

  // this function returns the viewphoto component, the setEdit and setMap are required as props to change the view
  renderView = () => {
    return (
      <ViewPhoto
        photos={this.props.photos}
        currentPhoto={this.state.currentPhoto}
        setEdit={this.setEdit}
        setMap={this.setMap}
      />
    );
  };

  // *****Issues we had with centering and rerendering the map where resolved by simply adding the key to the props... ¯\_(ツ)_/¯
  // ***adding a key value forces the map to rerender***
  // credit to : **[istarkov](/istarkov) ** commented [on Dec 15, 2015](#issuecomment-164833277) @ https://github.com/google-map-react/google-map-react/issues/76
  renderMap = () => {
    return (
      <PhotoMap
        key={this.state.currentPhoto}
        photos={this.props.photos}
        currentPhoto={this.state.currentPhoto}
        setEdit={this.setEdit}
        setView={this.setView}
        userLat={this.state.userLat}
        userLong={this.state.userLong}
      />
    );
  };

  deletePhoto = id => {
    if (id === this.state.currentPhoto) {
      console.log(id + 1, " asldkjfl   ", this.state.currentPhoto);

      this.props.deletePhoto(id);
      this.setState({ currentPhoto: parseInt(id + 1) });
    } else {
      this.props.deletePhoto(id);
    }
  };

  // function for setting the state to the edit view for the photo id provided.
  // returns the render edit function above after the state is set to the new id
  setEdit = id => {
    console.log("Setting the Edit View for Photo: " + id);
    this.setState({ currentPhoto: id, isEdit: true, isMap: false, isUpload:false});
    return this.renderEdit;
  };

  // function for setting the state to the map view for the photo id provided.
  // returns the render map function above after the state is set to the new id.
  setMap = id => {
    console.log("Setting the Map View for Photo: " + id);
    this.setState({ currentPhoto: id, isMap: true, isEdit: false, isUpload:false });
    return this.renderMap;
  };

  // function for setting the state to the regular view for the photo id provided.
  // returns the render view function above after the state is set to the new id.
  setView = id => {
    console.log("Setting the default View for Photo: " + id);
    this.setState({ currentPhoto: id, isMap: false, isEdit: false, isUpload:false });
    return this.renderView;
  };
      
      
// function for setting the state to the uploadPhoto Form view 
  // returns the render uploadePhoto function above after the state is set to the new id.
  setUploadForm = id => {
    console.log("Setting the Upload Photo Form View");
    this.setState({currentPhoto: id, isMap: false, isEdit: false, isUpload:true });
    return this.renderUploadForm;
  };

  showImageDetails = id => {
    this.setState({ currentPhoto: id, isEdit: false, isMap: false, isUpload:false});
  };
}
function mapStateToProps(state) {
  console.log("brwse props: ", state);
  return {
    secret: state.browseAuth.secret,
    isAuthenticated: state.auth.isAuthenticated,
    jwtToken: state.auth.jwtToken,
    history: state.history
  };
}

export default connect(
  mapStateToProps,
  actions
)(Browse);
