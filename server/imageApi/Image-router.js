// const imageController = require('./Image-Controller.js');


// /* ---Module for handling specific requests/routes for Image data ---*/


// // return just the requested iamge
// const handleImageId = (image, app) => {
//     app.route('/api/image/:id')
//         .get((req, resp) => {
//             imageController.findImageId(image, req, resp);
//         })
//         // if it is a PUT request then update specified image
//         .put((req, resp) => {
//             imageController.updateImageId(image, req, resp);
//         })
//         // if it is a POST request then insert new image
//         .post((req, resp) => {
//             imageController.insertImageId(image, req, resp);
//         })
//         // if it is a DELETE request then delete specified image
//         .delete((req, resp) => {
//             imageController.deleteImageId(image, req, resp);
//         });
// };




// module.exports = {
//     handleImageId

// };