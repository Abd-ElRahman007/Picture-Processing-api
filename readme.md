# project over view

## a brief summary of what is that project

this project is an photo api that uses the local photo and create a resized version of it that we can use it across the frontend and also use that api form placeholder

## what dependencies included in it

- first the famous express.js for building the server and making routes
- second eslint and prettier for linting the code and pretty it
- third jasmine for testing the code for errors and any excute problems
- forth typescript to compile the typescript into javascript

## how it is working

the idea behind the project is very simple, first its an api that take the specified photo and then resized as you like and then it cache it in a thumbnail folder for further requests without needing to run the api to process it again

## how to run the server and use the scripts

- the first script is (npm run build) that build the js from the typescript
- second the (npm run test) that run the test framework jasmine to test the code for any errors and miss behave
- third the (npm run start) that run the nodemon on the server.ts to run the server and make the api work
- forth the (npm run pretty) that run the prettier to format the document to the specify style
- lastly the (npm run eslint) that run the linter eslint to check the code

## parameters and how to use

to choose what photo you want use the (filename) parameter without the extension name ( {no .jpg} for ex ) that specifies what img to process and then use the (width) parameter to specify the required width for the img, lastly the (height) parameter to specify the required height for the image and here is an example of how to implement it in the api link

```text
http://localhost:3000/convert?filename={the name of the img in the src/img folder}&width={number}&height={number}
```
