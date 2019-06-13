# photo
## About
This web page is a work in progress, and intends to be the development and photography
portfolio of Hannah Mansoori.

## How does it work?
Photo content is hosted in a Firestore collection using Google's Firebase. It's then pulled in and represented on the screen. The client is developed with React, while the serverside is express using the nodemailer package for the email service. 

## What is left to work on?
Here's what is complete: 
1. About Page
2. Email/Contact Page
  1. The email service using nodemailer is working
3. General grid format for Photos
4. Firestore collection connects with app

Here's what needs to be finished:
1. Populate Firestore collection with all photos
2. Create similar grid display for development projects
3. Implement responsive CSS breakpoints
4. Implement caching of photos
