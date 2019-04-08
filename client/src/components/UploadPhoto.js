import React from 'react';
import './EditPhotoForm.css';

class UploadPhoto extends React.Component{
handleChange = e => {

    const regex = /^(\s)|-?(-?\d+(\.\d+)?)$/;

    let flag = true;
   


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
      
    if (!flag) {
     e.target.value = (e.target.value).slice(0,e.target.value.length -1);
    }
  };
    render(){
        
            return(
                <article className="details">
                     <div className="detailsPhotoBox">
                        <form className="photoForm" action="http://localhost:3001/api/image/23"method="post">
                            <legend> Upload New Photo</legend>
                            
                            <label>Title</label>
                            <input type='text' name='title' />
                            <label>Description</label>
                            <input type='text' name='description' />
                            <label>City</label>
                            <input type='text' name='city' />
                            <label>ISO </label>
                            <input type='text' name='iso' />
                            <label>City Code </label>
                            <input type='text' name='cityCode' />
                            <label>Country</label>
                            <input type='text' name='country' />
                            <label>Continent</label>
                            <input type='text' name='continent' />
                            <label>Latitude</label>
                            <input type='text' onChange={ e=> this.handleChange(e)} name='latitude' />
                            <label>Longitude</label>
                            <input type='text' onChange={this.handleChange} name='longitude' />
                            <label> Upload a Photo </label>
                            <input type='file' name='file' accept="image/jpeg, .jpg, image/png, .png" />
                            <label>Make</label> 
                            <input type='text' name='make' />
                            <label>Model </label>
                            <input type='text' name='model' />
                            <label>Exposure Time </label>
                            <input type='text' name='expTime' />
                            <label>Aperture</label>
                            <input type='text' name='aperture' />
                            <label>Focal Length</label>
                            <input type='text' name='focal' />
                            <label>Exif ISO</label>
                            <input type='text' name='exifISO' /> <br/>
                            <button type="submit">Submit </button>
                        </form>
                        <br />
                   
                    </div>
                </article>
            );
        } 
    
 
}

export default UploadPhoto;