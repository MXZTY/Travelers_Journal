import React from 'react';

class FavoriteItem extends React.Component {
    render() {
        // define the base url and add the image path to the string. 
        const imgURL = `https://storage.googleapis.com/comp4513-asg2-bucket/photos/large/${this.props.photo.filename}`;
        return (
            <div className='flex-container'>
                <figure style={this.styleFigure} >
                    <img src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title}/>
                    <button onClick={this.addImageToFavorites} style={this.stylex} >
                        X
                    </button>
                </figure>
            </div>
        );
    }

    addImageToFavorites = () => {
            console.log(this.props);
            this.props.addImageToFavorites(this.props.photo.id);   
    }

    styleFigure={
        position: "relative",
        width: "150px",
        height: "150px"
        
    
    }

    stylex={
        maxWidth: "30px",
        maxHeight: "30px",
        position: "absolute", 
        padding: "5px",
        top: "1px",
        right: "0.5px"
    }




}
export default FavoriteItem;