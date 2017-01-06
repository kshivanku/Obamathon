// LOADING OTHER PACKAGES
var fs = require('fs');
var Twit = require('twit')
var config = require('./config');
var T = new Twit(config);


var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];

var query = {
	q: "@BarackObama",
	locations: sanFrancisco
	// geocode : "40.06 -81.07 270mi"
	// geocode: "37.781157,-122.398720,100"
	//result_type: "popular"
}

// var query = {
//   q: "@BarackObama",
//   lat: "37.7821120598956",
//   long: "-122.400612831116"
// }


T.get('search/tweets', query, function(err, data, response) {
  var incomingdata = JSON.stringify(data, null, 2);
        fs.writeFile("tweets.json", incomingdata, function(){});
})


// T.get('geo/search', query, function(err, data, response) {
//   var incomingdata = JSON.stringify(data, null, 2);
//         fs.writeFile("tweets.json", incomingdata, function(){});
// })