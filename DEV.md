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
