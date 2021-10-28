# Emaily

## What is the use of this Repo

This Project is a MERN STACK Project that has features of the following
1. Log in via Google Oauth2
2. Creating surveys and sending it to your desired email recipients
3. Showing List of surveys and it's designated count of feedbacks
4. Payment Using Stripe

## Live Application URL

### https://emailitsurvey.herokuapp.com/
This URL has the application deployed in

## Prerequisites

### Mongodb Account 
Refer to https://docs.mongodb.com/

### Stripe Account 
Refer to https://stripe.com/docs

### SendGrid Account 
Refer to https://docs.sendgrid.com/

### Google Account for oauth2
Refer to https://developers.google.com/identity/protocols/oauth2

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash/terminal
npm install -g create-react-app
```
## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash/terminal
install dependencies in the server side

npm install 

then..

install dependencies in the front side
cd client
npm install

```
## IMPORTANT!

Setup dev keys
Create a file inside the folder of server/config
Name it as dev.js
You need to export your dev keys from services of your MONGODB, STRIPE, SENDGRID, GOOGLE OAUTH.
You can refer into server/config/prod.js for the naming conventions and keys needed.

In order to run the application Type the following command

```bash/terminal
you should be in the server directory then

npm run dev
```

The Application Runs on **localhost:3000**

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://mui.com/getting-started/usage/ to understand how to use Material UI


