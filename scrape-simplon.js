var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://simplon.co/blog/', function(error, response, body){
	if(error){
		console.log("Error:" + error);
	}
	console.log("Status code:" + response.statusCode);

	var $ = cheerio.load(body);

	$('div#main-content').each(function(index){
		var article = $(this).find('h2 > a').text().trim();
		var link = $(this).find('h2 > a').attr('href');
		fs.appendFileSync('simplon.txt', article + '\n' + link + '\n');
	});
});