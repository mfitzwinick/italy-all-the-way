# ITALIA TODAY Read Me

## Description/Purpose

Italia Today is for everyone who loves Italy!  It is a resource for both travelers and non-travelers alike. The user can choose which way they would like to have an Italian experience; either on the road with updated travel resources, or at home, with recipes from our Italian kitchen.  The user can also save their favorite destinations and experiences on a favorites page.


## Technologies Used

Languages used: 
- HTML
- CSS
- JAVASCRIPT / JQUERY
- SASS

The site utilized the following:
- unirest library
- Bootstrap library
- npm Express
- Node.js

The site pulls information from the following server side APIs:
- Yelp 
   https://api.yelp.com


The site also pulls from the following third-party APIs:
- JQuery
- Bootstrap with Popper.js
- Google Fonts

## Features

Italia presents the user with breath-taking UI home page that features a nav bar that allows the user to choose how they would like to have an Italian experience.  

The Italy At Home button will redirect the user to the Italy At Home page, which will allow the user to search for Italian recipes.  They will input a type of food, and recipe suggestions will populate on the page.  There is also a carosel of Italian imagery and a Music selection component that will provide ambiance for the user's enjoyment.  

The Travel button will redirect the user to the Travel page, that will allow the user to search any Italian city.  The city's hotels, restaurants and site-seeing options will populate the page.  

## Functionality

For the user, the site is visually pleasing and easy to navigate.  By using search inputs, the user can easily retrieve their desired information


## File Structure

The structure uses the Model, View, Control Framework.  
There is an app folder, package.json files, and a server.js file.

Nested in the app folder:
- Config 
- db (MySql Schema and Seeds)
- models (js files)
- music player (music files)
- public (css, img foler, script.js, 3 html pages)
- routes (api and html routing)

The site is built with three (four?) html pages: index.html (home page), italyhome.html (cooking, music, and ambient visuals), italytravel.html (hotels, restaurants, and site-seeing)...and music.html, which has a music player that will play selected songs.

index.html is linked to: 
-  test.css

italyhome.html is linked to: 
-  output.css 

italytravel.html is linked to: 
-  output.css 





# Examples/Screenshots

## Future Development

For future development:
- User will be able to save favorites in their person a libary
- Able to book hotels
- Able to make dinner reservations