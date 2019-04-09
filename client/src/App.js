import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import Browse from './components/Browse.js'
import Home from './components/Home.js';
import Favorites from './components/Favorites';
import * as cloneDeep from 'lodash/cloneDeep';
import About from './components/About.js';
import { Route } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import faFreeSolid from '@fortawesome/fontawesome-free-solid'
import SignIn from './components/Signin.js';
import SignUp from './components/Signup.js';
fontawesome.library.add(faFreeSolid);
const _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], favorites: [] };
  }

  async componentDidMount() {
    try{
      const url = "http://localhost:3001/api/images";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.loading = true;

      this.setState( { photos: jsonData } );
      // call the update state with local storage method to restore the user favorited photos.
      await this.updateStateWithLocalStorage();
      this.loading = false;
      // localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }

  updateStateWithLocalStorage = () => {
    // if the local storage length is 1 there are no favorited photos stored in localStorage.
    // we must account for the JWT token being stored in local storage so it should always have a length of 1
    if (localStorage.length > 3) {
      // for each of the items in the localStorage, iterate through.
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "JWT_TOKEN" || localStorage.key(i)=== "apikey"||localStorage.key(i) ==='userid' ) {
          
          continue;
        }
        
        // pass in the parse key value to the addImageToFavorites to add it to the favorites bar.
        // this will take in the updated values of that photo too if they have been changed on the server,
        // rather than using the informatio stored in local storage for each photo it only uses the id to call the addToFavorites.
        

        try{
        this.addImageToFavorites(JSON.parse(localStorage.key(i)), true);
        }
        catch(err){
         
          continue;
        }
      
      
      }
    }
  };

  updatePhoto = (id, photo) => {
    //Create a deep clone of photos from the state and use lodash function fot ehat task.
    const copyPhotos = cloneDeep(this.state.photos);
    //find photo to update in cloned array
    const photoToReplace = copyPhotos.find(p => p.id === id);
    // replace photo fields with edited values
    photoToReplace.title = photo.title;
    photoToReplace.city = photo.city;
    photoToReplace.country = photo.country;
    //update the state
    this.setState({ photos: copyPhotos });
  };

  deletePhoto = id => {
  
    let copyPhotos = cloneDeep(this.state.photos);
    let photoToDelete = copyPhotos.find(p => p.id === id);

    if (photoToDelete !== null) {
      let filteredPhotos = _.remove(copyPhotos, photoToDelete => {
        return photoToDelete.id !== id;
      });
      this.setState({ photos: filteredPhotos });
    }
    if (this.state.favorites.find(f => f.id === id)) {
      //Create a deep clone of the favorites array stored in state using lodash/cloneDeep
      const copyFavorites = cloneDeep(this.state.favorites);
      // use the lodash remove function to remove the item the matches the id of the focused item.
      _.remove(copyFavorites, favoriteItem => {
        return favoriteItem.id === id;
      });

      this.setState({ favorites: copyFavorites });
    }
  };

  addImageToFavorites = (id, loading = false) => {
    //Create a deep clone of the favorites array stored in state using lodash/cloneDeep
    const copyFavorites = cloneDeep(this.state.favorites);
    //create a favorite Item by finding the photo object based on the id
    const favoriteItem = this.state.photos.find(p => p.id === id);

    localStorage.setItem(id, JSON.stringify(favoriteItem));

    //if the item is already in the favorites list, remove the item when the favorite button is pressed.
    // do not remove the item from favorites if loading is set to true
    if (this.state.favorites.find(f => f.id === id) && !loading) {

      localStorage.removeItem(id);
      // use the lodash remove function to remove the item the matches the id of the focused item.
      _.remove(copyFavorites, favoriteItem => {
        return favoriteItem.id === id;
      });
    } else {
      // if the item is not in the favorite list, simply push it onto the temp array.
      copyFavorites.push(favoriteItem);
    }
    // set the favorites array stored in state to the newly updated favorites list.
    this.setState({ favorites: copyFavorites });
  };

  render() {
    return (
      <div style={{ background: "var(--details-back)" }}>
        <HeaderApp />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/browse" render={props =>
                <React.Fragment>
                  <Favorites favorites={this.state.favorites} photos={this.state.photos} addImageToFavorites={this.addImageToFavorites} />
                  <Browse photos={this.state.photos} updatePhoto={this.updatePhoto} addImageToFavorites={this.addImageToFavorites} deletePhoto={this.deletePhoto} />
                </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default App
