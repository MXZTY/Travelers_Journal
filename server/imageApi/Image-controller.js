// // node at this point doesn't support native JS fetch
// const fetch = require('node-fetch');
// // the lodash module has many powerful and helpful array functions
// const _ = require('lodash');

// // error messages need to be returned in JSON format
// const errorMessage = (msg) => {
//     return { Error: msg };
// };


// // Finds the requested Image ID /else return an error message 

// const findImageId = (Images, req, resp) => {
//     const idToFind = req.params.id;
//     // search the array of objects for a match
//     const image = Images.filter(obj => idToFind === obj.id);
//     // return the matching image
//     if (image.length > 0) {
//         resp.json(image);
//     } else {
//         resp.json(errorMessage(`id ${idToFind} not found`));
//     }
// };




// const updateImageId = (Images, req, resp) => {
//     const idToUpd = req.params.id;
//     // use lodash to find index for image with this id
//     let indx = _.findIndex(Images, ['id', idToUpd]);
//     // if didn't find it, then return message
//     if (indx < 0) {
//         resp.json(errorMessage(`${idToUpd} not found`));
//     } else {
//         // id found, so replace its value with form values
//         Images[indx] = req.body;
//         // let requestor know it worked
//         resp.json(errorMessage(`${idToUpd} updated`));
//     }
// };






// const insertImageId = (Images, req, resp) => {
//     const idToAdd = req.params.id;
//     const newData = req.body;
//     Images.push(newData);
//     // let requestor know it worked
//     resp.json(errorMessage(`${idToAdd} Added`));

// };




// const deleteImageId = (Images, req, resp) => {
//     const idToDlt = req.params.id;
//     // use lodash to find index for image with this id
//     let indx = _.findIndex(Images, ['id', idToDlt]);
//     // if didn't find it, then return message
//     if (indx < 0) {
//         resp.json(errorMessage(`${idToDlt} not found`));
//     } else {
//         // id found, so replace its value with form values
//         _.remove(Images, ['id', idToDlt]);
//         // let requestor know it worked
//         resp.json(errorMessage(`${idToDlt} Deleted`));
//     }
// };





// module.exports = {
//     findImageId,
//     updateImageId,
//     insertImageId,
//     deleteImageId,
    
// };