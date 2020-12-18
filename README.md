# ITALIA TODAY Read Me

## Description/Purpose

Italia Today is for everyone who loves Italy!  It is a resource for both travelers and non-travelers alike. The user can choose which way they would like to have an Italian experience; either on the road with updated travel resources, or at home, with recipes from our Italian kitchen.  The user can also save their favorite destinations and experiences on a favorites page.


## Technologies Used

Languages used: 
- HTML
- CSS
- JAVASCRIPT / JQUERY
- SASS

The site utilized the following libraries and packages:
- unirest library
- Bootstrap library
- Express
- Node.js
- Mysql2
- Sequelize
- Dotenv
- Sass

The site pulls information from the following server side APIs:
- Yelp 
   https://api.yelp.com


The site also pulls from the following third-party APIs:
- JQuery
- Bootstrap with Popper.js
- Google Fonts

## Features

Italia presents the user with breath-taking UI home page that features a nav bar that allows the user to choose how they would like to have an Italian experience.  

The Italy At Home button will redirect the user to the Italy At Home page, which will allow the user to see links to Italian recipes, common Italian phrases, a carosel of Italian imagery, and a music component that will provide ambiance for the user's enjoyment.  

The Travel button will redirect the user to the Travel page, that will allow the user to search any Italian city.  The city's hotels, restaurants and site-seeing options will populate the page. These options can then be added to favorites and the user's choices will be displayed on the Favorites page.  

## Functionality

For the user, the site is visually pleasing and easy to navigate.  By using search inputs, the user can easily retrieve their desired information and create a favorites page tailored to their personal interests. They can also experience a taste of Italy in their own home by learning about Italian culture.


## File Structure

The structure uses the Model, View, Control Framework.  

Nested in the main repository:
- Config folder
- models (js files)
- App folder (folders for css, img, music, db (including schema and seeds), and js, plus 5 html pages)
- routes (api and html routing)
- package.json
- server.js

The site is built with five html pages: index.html (home page), italyhome.html (cooking, music, and ambient visuals), italytravel.html (hotels, restaurants, and site-seeing), favorites.html which saves the users favorited items locally, and music.html which has a music player that will play selected songs. All of the html pages use css that was generated through sass.



# Examples/Screenshots

<img width="1631" alt="ITALIA Today Screenshot" src="https://user-images.githubusercontent.com/72819785/102543410-223afe00-4068-11eb-9b47-3d58f6b59d5e.png">


## Future Development

For future development:
- Login function with authentication that would allow favorites to be stored in a database as opposed to locally
- Ablity to book hotels
- Ablity to make dinner reservations
- Ability to schedule sightseeing tours
