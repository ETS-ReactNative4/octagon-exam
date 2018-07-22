1
If npm start throws error
Then do:
rm -rf node_modules
npm install


2
For creating this project 
npm install -g create-react-app

npm install --save prop-types

npm install --save redux
npm install --save react-redux
npm install --save react-router-dom

npm install --save redux-thunk

npm install --save cross-fetch

npm install react-chartjs-2 chart.js --save

3
for fake backend server
https://github.com/micromata/http-fake-backend


//disable this for fake server to work
headers: {
                    "encryptedUserId" : defaultValueUser(),
                    "examSettingsDtoEncrypted" : defaultValueExamSettings()
 }
 
 //then do
 npm run start:dev  ---> this runs fake http
 
4
build for dev for distribution among devs.
Install one time only:
npm install dotenv-cli --save-dev

Then for every build:

erase this line under package.json
 "homepage": "http://mastermcq.com/app",
 
npm run build-dev

open terminal and type 
serve -s -p 3000 build


5
https://www.npmjs.com/package/react-s-alert

npm install react-s-alert --save
