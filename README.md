# JS Interview questions

This repo contains simple js boilerplate environments to conduct javascript code tests using create-react-app and json-server.

There are two branches, `frontend` and `backend` each containing different tests.

## frontend

To set up the frontend test, install dependencies:

```
yarn
```

Run the json-server api in one terminal window:

```
yarn serve-api
```

and the create-react-app frontend in another window

```
yarn start
```

The api should now be running at [http://localhost:3334/volume](http://localhost:3334/volume) and the frontend app should be running at [http://localhost:33333](http://localhost:3333)

Instructions for the frontend test are found in ./src/App.js

```
Create a unordered list using React that lists the top 5 exchanges by volume of currency type Bitcoin (BTC) in
ascending order given the api endpoint: http://localhost:3334/volume

Work the way you are most comfortable and treat this as an everyday task. You are allowed to ask questions, look up documentation and search for answers.
```

The goals for this task are to see if the candidate is able to:

- successfully make an api call
- process the api data using common array methods: filter, sort
- use setState to update data
- map over the data in the component markup

This task is a starting point that can be extended by adding a mockup for css styling, a second api could be added with exchange logo urls to integrate into the design, etc.


## backend


## todo
- vanilla js frontend test

