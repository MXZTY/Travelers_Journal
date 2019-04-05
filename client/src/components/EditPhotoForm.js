import React from 'react';
import './EditPhotoForm.css';

class EditPhotoForm extends React.Component{

    render(){
        const id = this.props.currentPhoto
        const imgURL =  `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        if (this.props.photos.length > 0){
            const photo = this.props.photos.find( p => p.id === id);
            console.log(id);
            //Trigger the handlChange function when a change is made to any of the fields. 
            return(
                <article className="details">
                     <div className="detailsPhotoBox">
                        <form className="photoForm">
                            <legend> Edit Photo Details </legend>
                            <img src={imgURL + photo.path} alt={photo.title} />
                            <label>Title</label>
                            <input type='text' name='title' onChange={this.handleChange} value={photo.title} />
                            <label>City</label>
                            <input type='text' name='city' onChange={this.handleChange} value={photo.city} />
                            <label>Country</label>
                            <input type='text' name='country' onChange={this.handleChange} value={photo.country} />
                        </form>
                        <br />
                        <button onClick={this.setView}>View</button>
                        <button onClick={this.setMap}>Map</button>
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

    handleChange = e => {
        //find the current photo in our photo array
        const id = this.props.currentPhoto;
        const photo = this.props.photos.find( p => p.id === id);

        //update the photo using these 3 steps ...

        //1. make a clone of the current photo object
        const clonedPhoto = { ...photo};
        //2. update value of field that just changed. 
        clonedPhoto[e.currentTarget.name] = e.currentTarget.value;

        //3. tell parent (or above) to update the state for this photo. 
        this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
    }

}

export default EditPhotoForm;