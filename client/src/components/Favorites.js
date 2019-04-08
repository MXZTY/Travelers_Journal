import React from "react";
import FavoriteItem from "./FavoriteItem";
import "../index.css";
import JSZip from "jszip";
import utils from "jszip-utils";
import { saveAs } from "file-saver";


// this class outputs the array of favorites passed in from App.js via props each item in the array is outputted as a FavoriteItem.
class Favorites extends React.Component {
  state = {
    displayButton: false
  };

  //generate a zip file
  genZip = () => {
    
    //create zip instance
    let zip = new JSZip();
    let folder = zip.folder("favorites")
    let count = 0;

    console.log("downloading Now");

    for( let i of this.props.favorites){
      let url = `https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/comp4513-asg2-bucket/photos/large//${
              i.path
      }`;

      // eslint-disable-next-line
      utils.getBinaryContent(url, (err, data) => {
        if (err) {
          console.log(err);
        } 
        folder.file(i.path, data, {binary:true});
        count ++;
         //add to the zip folder if we have added them all
        if (count === this.props.favorites.length){
          zip.generateAsync({ type: "blob"}).then((content) => {
            saveAs(content, "favorites.zip");
          });
        }
      });
    };  
  }

  // a conditional id is added to the favorites and download button
  // so that if the favorites array is empty, the user is not given an option to download,
  // and doesnt have a blank bar on the top of their screen
  render() {
    return (
      <section className="favorites flex-container-row">
        <div
          className="flex-item-favorites"
          id={this.props.favorites < 1 ? "Hide" : "Show"}
        >
          <h3> ❤ Favorites</h3>
          <br />
          <button
            className="flex-button"
            id={this.props.favorites < 1 ? "Hide" : "Show"}
            onClick={this.genZip}
          >
            Download
          </button>
        </div>
        {this.props.favorites.map(f => {
          return (
            <FavoriteItem
              photo={f}
              key={f.id}
              addImageToFavorites={this.props.addImageToFavorites}
            />
          );
        })}
      </section>
    );
  }
}
export default Favorites;
