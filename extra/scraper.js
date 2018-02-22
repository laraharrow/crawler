const request = require('request');
const cheerio = require('cheerio');


//PROMISE EXAMPLE
exports.imgScrape = (url) => {
	return new Promise((resolve, reject) => {
		request(url, (error, resp,body) => {
			if (error) { 
				reject({
					error: error
				});
			}
			let $ =cheerio.load(body);
			let $url = url;
			let $img = $('.post-image img').attr('src');
			let $title = $('.post-title').text();
			// let $desc = $('[itemprop=description').text();

		let image = {
			url: $url,
			img: $img,
			title: $title,
			// description: $desc, 
		}

		//respond with the final JSON
		console.log('scraped from scraper.js', image);
		resolve(image);
	
		});
	});
}


// CALLBACK EXAMPLE
// exports.imgScrape = (url, cb) => {
// 	request(url, (error, resp,body) => {
// 		if (error) { 
// 			cb({
// 				error: error
// 			});
// 		}
// 		let $ =cheerio.load(body);
// 		let $url = url;
// 		let $img = $('.post-image img').attr('src');
// 		let $title = $('.post-title').text();
// 		// let $desc = $('[itemprop=description').text();

// 	let image = {
// 		url: $url,
// 		img: $img,
// 		title: $title,
// 		// description: $desc, 
// 	}

// 	//respond with the final JSON
// 	console.log('scraped from scraper.js', image);
// 	cb(image);
	
// 	});
// }