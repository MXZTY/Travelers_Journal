const path = require("path");
const fs = require("fs");
const express = require('express');
const parser = require('body-parser');

// for now, we will get our data by reading the provided json file
const imageJsonPath = path.join(__dirname, '../data','Images.json');
const userJsonPath = path.join(__dirname, '../data', 'Logins.json');

const imageJsonData = fs.readFileSync(imageJsonPath, 'utf8');
const userJsonData = fs.readFileSync(userJsonPath, 'utf8');



// convert string data into JSON object
const Images = JSON.parse(imageJsonData);
const Users = JSON.parse(userJsonData);
// create an express app
const app = express();

// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

module.exports = {Images, Users};
