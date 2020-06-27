# burger

## Description
This application is a full-stack application that lists burgers that can be "devoured".  When the user clicks the "Devour it" button, the burger is then moved over onto the Devoured Burger list.  The user may input new burgers in the form, which will then update the "Burgers to Devour" list.  The burger information is all rendered through server-side rendering using express handlebars.

## Technologies
This application is a full-stack application using Javascript, Node.js, mySQL, jQuery, Express, Express handlebars, HTML, and CSS.  SQL queries are handled with a custom ORM.
The following packages were installed and utilized:
* dotenv
* mysql
* express
* express-handlebars

## Installation
After pulling from the repository, run `npm install` in your terminal command line to install all of the dependencies.  
This is set up to use a .env file to store your mysql username and password, so you will to create a .env file with your own information in the following to run it locally:
```
DB_HOST= "localhost"
DB_USER= ""
DB-PORT= 3306
DB_PASSWORD= ""
DB_NAME= "burgers_db"
```
Use the schema.sql to set up the database, and then run the application through your terminal with `node server.js`.

## Demos
This application is deployed on heroku. Try it out [HERE](https://protected-springs-53094.herokuapp.com/)!

### Screenshot
![screenshot](public/assets/img/Screen%20Shot%202020-06-25%20at%2012.34.35%20PM.png)
