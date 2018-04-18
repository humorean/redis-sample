# JS Interview questions

This repo contains simple js boilerplate environments to conduct javascript code tests using create-react-app,
json-server and express-generator.

There are two branches, `frontend` and `backend` each containing different tests.

## Frontend

To set up the frontend test, install dependencies:

### Installation

```
yarn
```

### Start servers

Run the json-server api in one terminal window:

```
yarn serve-api
```

and run the create-react-app frontend in another terminal window

```
yarn start
```

### Test Instructions

The api should now be running at [http://localhost:3334/volume](http://localhost:3334/volume) and the frontend app should be running at [http://localhost:3333](http://localhost:3333)

Instructions for the frontend test are found in `./src/App.js`. This file should be opened in the editor for the candidate.

```
Create an unordered list using React that lists the top 5 exchanges by volume of currency type Bitcoin
(BTC) in descending order given the api endpoint: http://localhost:3334/volume

Work the way you are most comfortable and treat this as an everyday task. You are allowed to ask
questions, look up documentation and search for answers.
```

### Test goals

The goals for this task are to see if the candidate is able to:

- successfully make an api call
- process the api data using common array methods: filter, sort
- use setState to update data
- map over the data in the component markup

This task is a starting point that can be extended by adding a mockup for css styling, a second api could be added with exchange logo urls to integrate into the design, etc.


## Backend

### Installation
To set up the backend test, install dependencies:

```
yarn
cd server
yarn
```

### Start servers
`cd ..` back to project root and Run the json-server api in one terminal window:

```
yarn serve-api
```

run the express application in another terminal window

```
yarn start-express
```

### Test instructions
The private api should now be running at [http://localhost:3334/volume](http://localhost:3334/volume) and the express app should be running at [http://localhost:3335/api](http://localhost:3335/api)

Instructions for the backend test are found in `./server/routes/api.js`. This file and the Express app entry point `./server/app.js` should be opened in the editor for the candidate. Terminal should be available as well.


```
A front end application requires a new http endpoint to be built in this Express application.

1) Create a new endpoint at http://localhost:3335/api/volume
A list of the top 5 exchanges by volume of currency type Bitcoin (BTC) in descending order given data
from the private api endpoint: http://localhost:3334/volume

The frontend expects the api data to match this schema:

{
  "volume": [
    {
      "name": string,
      "volume": number
    },
    {
      "name": string,
      "volume": number
    }
    ...
  ]
}

2) Alter the endpoint to add the ability to filter by currency type (BTC or ETH) /api/volume/:currency

3) The data is expected to be valid for 24 hours. Provide caching for this endpoint.

Feel free to install any helper packages. Work the way you are most comfortable and treat this as an
everyday task. You are allowed to ask questions, look up documentation and search for answers.
```

### Test goals
The goals for this task are to see if the candidate is able to:

- successfully make an api call
- process the api data using common array methods: filter, sort
- respond only after api call is complete
- return the response as valid JSON, matching provided schema
- filter data by path parameter
- appropriately set response headers

This task is a starting point that can be extended by requiring an api endpoint to munge data from two sources, handle
multiple async streams of data before returning a response using Promise.all or other async utlities, adding handlers
for other http verbs, PUT, POST, DELETE, etc.

## Todo
- vanilla js frontend test

