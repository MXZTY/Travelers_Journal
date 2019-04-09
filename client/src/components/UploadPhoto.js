import React from 'react';
import './EditPhotoForm.css';

class UploadPhoto extends React.Component{
    state = {
        title: "",
        desc: "",
        city: "",
        iso: "",
        cityCode: "",
        country: "",
        continent: "",
        latitude: "",
        longitude: "",
        file: ""
        
    }
handleChange = e => {

    const regex = /^(\s)|-?(-?\d+(\.\d+)?)$/;

    let flag = true;

    if(e.currentTarget.name === "title"){
         this.setState({ title: e.target.value });
    }else if(e.currentTarget.name === "description"){
        this.setState({ desc: e.target.value });
    }else if(e.currentTarget.name === "iso"){
        this.setState({ city: e.target.value });
    }else if(e.currentTarget.name === "city"){
        this.setState({ iso: e.target.value });
    }else if(e.currentTarget.name === "cityCode"){
        this.setState({ cityCode: e.target.value });
    }else if(e.currentTarget.name === "country"){
                this.setState({ country: e.target.value });
    }else if(e.currentTarget.name === "photo"){
     
        this.setState({ file: e.target.value });
    }


  
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
    
    if (e.currentTarget.name === "latitude"){
         this.setState({ latitude: e.target.value });
    }else if (e.currentTarget.name === "longitude"){
         this.setState({ longitude: e.target.value });
    }
  };

//form validation

validate = (e) =>{
    let flag = true;
     if(this.state.title === ""){
         flag=false;
    }else{
         flag=true;
    }
    if(this.state.desc === ""){
         flag=false;
    }else{
         flag=true;
    }
    
    if(this.state.city === ""){
         flag=false;
    }else{
         flag=true;
    }
    
    if(this.state.iso === ""){
         flag=false;
    }else{
         flag=true;
    }
    
     if(this.state.cityCode === ""){
         flag=false;
    }else{
         flag=true;
    }
    
    if(this.state.country === ""){
          flag=false;
    }else{
         flag=true;
    }
    if(this.state.latitude === ""){
          flag=false;
    }else{
         flag=true;
    }
    if(this.state.longitude === ""){
          flag=false;
    }else{
         flag=true;
    }
    
   if(this.state.file === ""){
          flag=false;
    }else{
         flag=true;
    }
    
    console.log(flag);
   
    if(!flag){
         e.preventDefault();
    }else{
        return true;
    }

   
}

    render(){
        
            return(
                <article className="details" style={this.makeBigger}>
                     <div className="detailsPhotoBox">
                        <form className="photoForm row" action="http://localhost:3001/api/image/23"method="post" enctype="multipart/form-data">
                <div className="col-8">            
                <legend> Upload New Photo</legend>
                            
                            <label>Title</label>
                            <input type='text'onChange={this.handleChange} name='title' />
                            <label>Description</label>
                            <input type='text'onChange={this.handleChange} name='description' />
                            <label>City</label>
                            <input type='text' onChange={this.handleChange} name='city' />
                            <label>ISO </label>
                            <input type='text' onChange={this.handleChange} name='iso' />
                            <label>City Code </label>
                            <input type='text' onChange={this.handleChange} name='cityCode' />
                            <label>Country</label>
                            <input type='text' onChange={this.handleChange} name='country' />
                            <label>Continent</label>
                            <input type='text' onChange={this.handleChange} name='continent' />
                            <label>Latitude</label>
                            <input type='text' onChange={ e=> this.handleChange(e)} name='latitude' />
                            <label>Longitude</label>
                            <input type='text' name='longitude' />
                                </div>
                            <div className="col-8">       
                            <label> Upload a Photo </label>
                            <input type='file' onChange={this.handleChange}  name='photo' accept="image/jpeg, .jpg, image/png, .png" />
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
                            <input type='number' name='exifISO' /> <br/>
                            <button type="submit" >Submit </button>
                        </div>
                        </form>
                        <br />
                   
                    </div>
                </article>
            );
        } 
    makeBigger={
     
    }
 
}

export default UploadPhoto;