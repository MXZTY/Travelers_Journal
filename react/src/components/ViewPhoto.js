import React, { Component } from 'react';
import './EditPhotoForm.css';

class ViewPhoto extends Component{
    render(){
        console.log(this.props.currentPhoto + " IS THE CURRENT PHOTO IN PHOTOVIEW");
        const id = this.props.currentPhoto;
        const imgURL =  `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        if(this.props.photos.length > 0){
            const photo = this.props.photos.find(p => p.id === id);
            return(
                <article className="details">
                     <div className="detailsPhotoBox">
                        <div className="photoForm">
                            <img src={imgURL + photo.path} alt={photo.title} /> 
                            <br/>
                            <h3>Title: <i>{photo.title}</i></h3> <br/>
                            <h3>City: <i>{photo.city}</i></h3><br/>
                            <h3>Country: <i>{photo.country}</i></h3><br/> 

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