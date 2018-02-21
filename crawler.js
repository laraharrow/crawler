// used to make HPTTP requests
var request = require('request');
// use to parse and select HTML elements on a page
var cheerio = require('cheerio');
// use to parse URLs
var URL = require('url-parse');

var pageToVisot = 'http://www.arstechnica.com';
console.log(`Visiting page ${pageToVisot}`);
request(pageToVisot, function(err, res, body) {
	if (err) {console.log(`Errom ${err}`); }
	console.log(`Status code: ${res.statusCode}`);
	if (res.statusCode === 200) {
		let $ = cheerio.load(body);
		console.log(`Page title: ${$('title').text()}`)
	} 
})
