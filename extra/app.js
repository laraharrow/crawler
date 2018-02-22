const scraper = require('./scraper');
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const app = express();
const port = 8080;
const path = 'text.txt'
const url = 'http://imgur.com/gallery/hj4NW';


//PROMISE EXAMPLE
scraper.imgScrape(url)
	.then(data => {
		console.log('data from scraper recieved');
		fs.writeFile(path, JSON.stringify(data), error => {
			if (error) {
				console.log(error);
			}
			console.log(`successfully wrote to ${path}`);
		})
	})
	.catch(error => {
		console.log('error scraping data');
	})

// CALLBACK EXAMPLE
	// scraper.imgScrape(url, (data) => {
	// 	console.log('data from scraper recieved \n', data);
	// })


app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});


// BASIC CHEERIO
	// const url = 'https://goo.gl/8y5kj8';

	// request(url, (err, resp, body) => {
	// 	let $ = cheerio.load(body);
	// 	let jobTitle = $('.jobtitle font').text();
	// 	let jobDescription = $('.summary p b').text();
	// 	let jobLocation = $('.location').text();

	// 	let obj = {
	// 		jobTitle,
	// 		jobDescription,
	// 	  jobLocation,
	// 	}
	// 	console.log(obj);
	// })


// BASIC REQUEST
// logout entire html page of google.com
	// const url = 'http://google.com';
	// request(url, (err, resp, body) => {
	// 	if (err) { 
	// 		console.log(err); 
	// 	} else {
	// 		console.log(body);
	// 	}
	// });


	// download entire html page of google.com
	// use methods fs to store the html file localy
	// use method on to chain a callback in case of error or to confirm success 
		// const url = 'https://goo.gl/8y5kj8';

		// const destination = fs.createWriteStream('./downloads/google.html');
		// request(url)
		// 	.pipe(destination)
		// 	.on('finish', () => { console.log('all done') })
		// 	.on('error', (err) => { console.log(err); })