import React from "react";
class PhotoThumb extends React.Component{
    render(){
        const imgURL = `https://storage.googleapis.com/comp4513-asg2-bucket/photos/large/${this.props.photo.filename}`;
        return(
            <div className="photoBox" onClick={ this.handleViewClick }>
            <div>    
            <figure style={this.styleFigure}>
                    <button className="buttonItem-delete" style={this.stylex} onClick={this.deletePhoto}>X</button>
                    <img onClick={this.setView} src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title} />
                </figure></div>
                <div className="tileInformation">
                    <div className="tileTitles" >
                        <h3>{this.props.photo.title}</h3>
                        <p>{this.props.photo.location.city}, {this.props.photo.location.country}</p>
                    </div>
                    <div className="buttonContainer">
                        <div className="buttonStyling">
                            <button className="buttonItem" onClick={this.setView}>View</button>
                            <button className="buttonItem" onClick={this.addToFavorites}>❤</button>
                        </div>
                        <div className="buttonStyling">
                            <button className="buttonItem" onClick={this.setEdit}>Edit</button>
                            <button className="buttonItem" onClick={this.setMap}>Map</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    styleFigure={
        width: "100px",
        height: "100px",
       
     
      
 
    }

    stylex={
        background: "#39324B",
        borderRadius: "1em", 
        maxWidth: "40px",
        maxHeight: "40px",
        position: "absolute", 
        padding: "5px",
        top: "5px",
        right: "0.5px"
    }


    deletePhoto = (e) => {
        this.props.deletePhoto(this.props.photo.id);
    }

    setEdit = () => {
        this.props.setEdit(this.props.photo.id);
    }
    
    setMap = () => {
        this.props.setMap(this.props.photo.id);
    }

    setView = () => {
        this.props.setView(this.props.photo.id);
    }

    addToFavorites = (e) => {
        console.log(this.props);
        this.props.addImageToFavorites(this.props.photo.id);
    }
}

export default PhotoThumb;
