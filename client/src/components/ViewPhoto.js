import React, { Component } from 'react';
import './EditPhotoForm.css';

class ViewPhoto extends Component{
    render(){

        const id = this.props.currentPhoto;
        const imgURL =  `https://storage.googleapis.com/comp4513-asg2-bucket/photos/large/`;
      
        if(this.props.photos.length > 0){
            const photo = this.props.photos.find(p => p.id === id);
         
            return(
                <article className="details">
                     <div className="detailsPhotoBox">
                        <div className="photoForm">
                            <img src={imgURL + photo.filename} alt={photo.title} /> 
                            <br/>
                            <h3>Title: <i>{photo.title}</i></h3> <br/>
                            <h3>City: <i>{photo.location.city}</i></h3><br/>
                            <h3>Country: <i>{photo.location.country}</i></h3><br/> 
                            <h3>Make: <i>{photo.exif.make}</i></h3><br/> 
                            <h3>Model: <i>{photo.exif.model}</i></h3><br/> 
                            <h3>Exposure Time: <i>{photo.exif.exposure_time}</i></h3><br/> 
                            <h3>Aperture: <i>{photo.exif.aperture}</i></h3><br/> 
                            <h3>Focal Length: <i>{photo.exif.focal_length}</i></h3><br/> 
                             <h3>Iso: <i>{photo.exif.iso}</i></h3><br/> 
                            <p className="buttons">
                            <button onClick={this.setEdit}>Edit</button>
                            <button onClick={this.setMap}>Map</button>
                            </p>
                        </div>

                    

                    </div>
                </article>
            );
        } else{
            return null;
        }
    }

    setEdit = () => {
        this.props.setEdit(this.props.currentPhoto);
    }

    setMap = () => {
        this.props.setMap(this.props.currentPhoto);
    }

}

export default ViewPhoto;