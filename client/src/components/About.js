import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

//This component displays information about the website. 
class About extends React.Component {
    // we use Link from the react router dom to link the button to a specific component.
    render() {
        return (
            <div className="bannerAbout">
                <div>
                    <br/>
                    <h4>Issues:</h4>
                    <h4>- We do not have the user authentication working on both uploads/deletes</h4>
                    <h4>- For image uploading you need to have all of the fields filled in</h4>
                    <br></br>
                    <h4>API Examples:</h4>
                    <h4>- <a href="http://wettoast.rocks:3001/api/images/">All images, /api/images</a></h4>
                    <h4>- <a href="http://wettoast.rocks:3001/api/image/deefb8ee-1fd9-408e-a3d7-a9557e1326f9">A specific image based on ID, /api/image/:id</a></h4>
                    <br></br>
                    <h4>Roles:</h4>
                    <h4>Due to our design practice of using different repositories for each functionality, it may be difficult to evaluate our groups.</h4>
                    <h4>Please see the following breakdown for an idea.</h4>
                    <h4>Max/Sarf- Implemented oauth authentication as well as local strategy on server with form validation using Joi, and react redux form for login and signup, API. </h4>
                    <h4>Josh/Zeb- implemented the infrastructure for Google Cloud Platform, backend hosting server, and website domain.</h4>
                    <h4>Sam/Cryston- Responsible for image uploading, and provided assistance for authentication and API.</h4>
                    <br></br>
                    <h4>References:</h4>
                    <h4>- GitHub documentation .gitignore files from <a href="https://help.github.com/articles/ignoring-files/"> here</a></h4>
                    <h4>- Building a search filter in react from <a href="https://www.youtube.com/watch?v=OlVkYnVXPl0"> here</a></h4>
                    <h4>- React template documentation was taken from <a href="http://bit.ly/CRA-PWA">Facebook, Github</a></h4>
                    <h4>- ServiceWorker template was taken from <a href="https://github.com/facebook/create-react-app/issues/2374">Facebook, Github</a></h4>
                    <h4>- A tutorial for uploading files to google cloud storage taken from <a href="https://medium.com/@iwozzy/easily-host-images-with-node-and-google-cloud-storage-29fb14e2cdb8"> here</a></h4>
                    <h4>- A tutorial for uploading files taken from <a href="https://medium.com/@nitinpatel_20236/image-upload-via-nodejs-server-3fe7d3faa642"> here</a></h4>
                    <h4>- Bucket and other storage information used for retrieval and uploading of images <a href="https://cloud.google.com/storage/docs/"> here</a></h4>
                    <h4>- Mongoose and MongoDB access tutorials from <a href="https://www.youtube.com/playlist?list=PLVBXNyNyLNq0jyDcfjOc9psQYK_leG52r"> here</a></h4>
                    <h4>- Inserting items into MongoDB from <a href="https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/"> here</a></h4>
                    <h4>- Generating random id's for images from <a href="https://www.npmjs.com/package/uuid"> here</a></h4>
                    <br></br>
                        <Link to='/browse'>
                            <button>Browse</button>
                        </Link>
                </div>
            </div> 
        );
    }
}
export default About;