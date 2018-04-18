/**
 * A front end application requires a new http endpoint to be built in this Express application.
 * 
 * 1) Create a new endpoint at http://localhost:3335/api/volume
 * A list of the top 5 exchanges by volume of currency type Bitcoin (BTC) in descending order given data
 * from the private api endpoint: http://localhost:3334/volume
 * 
 * The frontend expects the api data to match this schema:
 * 
 * {
 *   "volume": [
 *     {
 *       "name": string,
 *       "volume": number
 *     },
 *     {
 *       "name": string,
 *       "volume": number
 *     }
 *     ...
 *   ]
 * }
 * 
 * 2) Alter the endpoint to add the ability to filter by currency type (BTC or ETH) /api/volume/:currency
 * 
 * 3) The data is expected to be valid for 24 hours. Provide caching for this endpoint.
 * 
 * Feel free to install any helper packages. Work the way you are most comfortable and treat this as an everyday task. 
 * You are allowed to ask questions, look up documentation and search for answers.
 */

var express = require('express');
var router = express.Router();

/* GET api. */
router.get('/', function(req, res, next) {
  res.json({ status: '200 OK' });
});


/* add express code here */

module.exports = router;
