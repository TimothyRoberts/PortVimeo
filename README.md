## Vimeo to React Portfolio

This project was created to make a portfolio website for a Vimeo user. Vimeo is a website where users can upload and share high quality videos to their profile. This application pulls the user information and videos from a Vimeo profile using the Vimeo API. That information is then loaded into a react portfolio page.

View example here at this address: https://vimeoportfolio-419c1.firebaseapp.com/

## Getting Started

To access this project, first clone this repository. Then, go to the portfolio folder directory in your terminal. Finally run
```
npm start
```
in your terminal to run the project. If you have a Vimeo account, place your Vimeo user ID after users/ in the axiom request.
```
axios.get("https://api.vimeo.com/users/94195684/videos", {
```
Do this in the Home.js, Contact.js and Portfolio.js files in the src folder.
