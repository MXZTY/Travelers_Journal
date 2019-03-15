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

  render() {
    //https://www.youtube.com/watch?v=OlVkYnVXPl0
    //returns an array filtered based on the users search term (stored in state)
    let filteredList = this.props.photos.filter(
      (photo)=>{
        //if city changed
        if(this.state.input==="City"){
          return photo.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }else{//country changed
          return photo.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
