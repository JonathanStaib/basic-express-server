# LAB - Class 02

## Project: Basic Express Server

### Author: Jonathan Staib

### Problem Domain

This app exists for us as a class to further learn how to create an express server, getting more complicated with tests. Also learning how to bring queries into the mix.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/rkgallaway/server-deployment-practice-d51/actions)

### Setup

#### `.env` requirements (where applicable)

PORT

#### How to initialize/run your application (where applicable)

`npm start`

#### How to use your library (where applicable)

#### Features / Routes

- this is a log: When server is running properly at status 200, you will receive `logging`
- when entering your name in query with `/person?name=x` you will be displayed a JSON file of your name.
- GET : empty query or no query with `/person` - status 500
- GET : `/invalid` - status 404

#### Tests

- How do you run tests?
    npm test, thunder client and guthub actions to check the tests
- Any tests of note?
    1. 404 on a bad route
    2. 404 on a bad method
    3. 500 if no name in the query string
    4. 200 if the name is in the query string
    5. given an name in the query string, the output object is correct

- Describe any tests that you did not complete, skipped, etc
    didn't complete 200 if name is in query. I wasn't sure about the difference between bad route and bad method.

#### UML

[UML img](./src/assets/UML.png)