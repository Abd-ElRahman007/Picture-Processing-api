# project over view

## a brief summary of what is that project

this project is an photo api that uses the local photo and create a resized version of it that we can use it across the frontend and also use that api form placeholder

## what dependencies included in it

- first the famous express.js for building the server and making routes
- second eslint and prettier for linting the code and pretty it
- third jasmine for testing the code for errors and any excute problems
- forth typescript to compile the typescript into javascript

## how it is working

first it takes the photo's name from the parameter in the calling link and resize it according to the specified size in the parameter then it make a copy of it in that size in the thumb file and thats it.
when you call that image again with the same size it will fetch you the copy to help in the performance of the project
