// https://medium.com/@iwozzy/easily-host-images-with-node-and-google-cloud-storage-29fb14e2cdb8
const {Storage} = require('@google-cloud/storage');

var storage = new Storage({
  projectId: 'credible-cosine-228918',
  keyFilename: '../../key.json'
})

var BUCKET_NAME = 'comp4513-asg2-bucket'
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.39.0/storage/bucket
var myBucket = storage.bucket(BUCKET_NAME)

// check if a file exists in bucket
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.39.0/storage/file?method=exists
var file = myBucket.file('myImage.png')

// upload file to bucket
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.39.0/storage/bucket?method=upload
let localFileLocation = 'FILE_TO_UPLOAD_GOES_HERE'
myBucket.upload(localFileLocation, { public: true })
  .then(file => {
    // file saved
  })
    
// get public url for file
var getPublicThumbnailUrlForItem = file_name => {
  return `https://storage.googleapis.com/${BUCKET_NAME}/${file_name}`
}