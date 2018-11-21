# base

## Start Commands 
`NPM run dev` 
to start development phase of website. you can edit it while its on.

`NPM start`
to start it. the changes made while running this will not show on the running website.

## Description
This is the first version of my codebase for websites and other web related projects

## NPM Packages
```Json
  "dependencies": {
    "bcrypt": "^3.0.0",
    "body-parser": "^1.18.3",
    "dotenv": "^6.0.0",
    "ejs": "^2.6.1",
    "express": "^4.16.3",
    "express-formidable": "^1.2.0",
    "express-session": "^1.15.6",
    "formidable": "^1.2.1",
    "morgan": "^1.9.0",
    "mysql": "^2.16.0"
  },
  "devDependencies": {
    "debug": "^3.1.0",
    "nodemon": "^1.17.5",
    "run-script-os": "^1.0.3"
  },
```
## Code Examples
```javascript
app.listen(port, () => {
	console.log('Site Started');

});

```
```javascript
const fs = require('fs');
const path =require('path');

module.exports = function (app){
   console.log(__filename);
   fs.readdirSync(__dirname, {withFileTypes:true}).forEach(file =>{
       if(file.name !== 'index.js'){
           require(path.join(__dirname, file.name))(app);
       }
   });
};
```
## Maintainer
* Kevin Skov Jensen / LizardWizard22


