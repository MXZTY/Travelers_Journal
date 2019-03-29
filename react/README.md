## Each Group Create a new branch from master and label it the feature you are working on
- then each group member create a branch off of the their groups feature branch. 

create local folder for files and make sure your branch head is set to the branch you just created. 
   
   add code and commit and push to your own branch as needed. 

i reccomend doing this with just a comment to test its working properly

you will see you pushed changes in github within the branches section. 

when you are finished working on your branch

ensure all changes are pushed and navigate to the github repo/branch you just completed. 

click create pull request and it will make a pull request to your groups main branch. 

then go to your groups main branch and you will see there is a new pull request for merging in your branch changes. 

review the changes (Make card in trello and assign another team member to review the changes)

once it is approved for merging into your main group branch, click merge and you have an option to add comments and                     
close the branch. 

Test that everything is working on the groups branch (DO NOT MERGE YOUR GROUPS BRANCH UNTIL ALL GROUP MEMBERS BRANCHES                    ARE COMPLETED AND MERGED)

once all group members have merged their branches into the groups branch, and everything is tested, you can either request another review from a different group, or just merge this branch into the master. 
              
              
              - WARNING. 
               - incase you do not know how to deal with merge conflicts. 
               - if there has been changes on your group branch that havent been pulled to your local branch, you must pull these changes before you push or you may get a merge conflict. 
               - Also if you and another group member are working on the same files, you will also get a merge conflict when you go to merge your branches. 
               - to handle merge conflicts, use visual studio code (the git section) and your merge conflicts will show up there. 
               - there will be 2 versions of each of the conflicting files, and each line that is different will be highlighted in both copies. 
               - review each of these conflicts and select the change that you wish to apply (the version on the server/ your local version and there is an option to keep both versions too). 
                   ******** PLEASE BE CAREFUL WITH MERGE CONFLICTS AS YOU MAY LOSE WORK OR ACCIDENTALLY DELETE OTHER PEOPLES WORK!!!!!!! THIS IS SUPER IMPORTANT SO IF YOU HAVE MERGER CONFLICTS AND ARE UNSURE WHAT TO DO WITH THEM PLEASE CONSULT OTHER MEMBERS OR GROUPS!!!!!!!
              
              
To get the app working locally, simply ensure your local repo contains the package.json file with the dependancies for the project. 
- run `sudo npm install -g` to install these packages and make sure you are in the my-app folder when doing this. 
- After you have installed these packages you will see a folder called node-modules within the my-app folder.
use npm start and you should be up and running. 
- if you are getting a node or npm error, simply update your local npm version and reinstall node. 
- check npm version with 'npm -v'


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
