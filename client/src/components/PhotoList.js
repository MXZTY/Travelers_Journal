import React from "react";
import PhotoThumb from "./PhotoThumb.js";

class PhotoList extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      search:'',//search term
      input:''//either country or city
    }
  }

  updateSearch=(e)=>{
    //if country changed
    if(e.target.id==="countryInput"){
      document.getElementById('cityInput').value = null;
      this.setState({search: e.target.value, input:"Country"})
    }else{//city changed
      document.getElementById('countryInput').value = null;
      this.setState({search: e.target.value, input:"City"})
    }
  }
  
  uploadPhoto=(e)=>{
           this.props.setUploadForm(this.props.currentPhoto);
      
  }

  render() {

    //https://www.youtube.com/watch?v=OlVkYnVXPl0
    //returns an array filtered based on the users search term (stored in state)
    let filteredList = this.props.photos.filter(
      (photo)=>{
          console.log(photo.id);
          console.log(photo.id + " " + photo.location.country);
        //if city changed
        if(this.state.input==="City"){
          return photo.location.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }else{//country changed
          return photo.location.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      } 
    )
    if (this.props.photos.length > 1) {
      return (
          
        <div className="flex-container">
         
          <div className="filterBy flex-box">
          
            <h2 className="flex-title"> Filter By:</h2>
            
             <input id="countryInput" className="flex-item" name="filterCountry" type="text" placeholder="Country" onChange={this.updateSearch}/> 
             <input id="cityInput" className="flex-item" name="filterCity" type="text" placeholder="City" onChange={this.updateSearch}/>
           <div className="addPhoto flex-box" >
            <h2 className="flex-title"> Upload a New Photo: <button onClick={this.uploadPhoto}> <i className="fas fa-upload"></i>
          </button> </h2>
          </div>
          </div>
            

        <article className="photos">

          {filteredList.map(p => (
            <PhotoThumb
              photo={p}
              key={p.id}
              setView={this.props.setView}
              addImageToFavorites={this.props.addImageToFavorites}
              deletePhoto={this.props.deletePhoto}
              setEdit={this.props.setEdit}
              setMap={this.props.setMap}
            />
          ))}
        </article>
        </div>
        
      );
    } else {
      return null;
    }
  }
}

export default PhotoList;
