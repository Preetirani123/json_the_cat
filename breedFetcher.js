const request = require('request');

const args = process.argv.slice(2);

let catName = args[0];

let urlNeeded = "https://api.thecatapi.com/v1/breeds/search?q=" + catName

request(urlNeeded, (error, response, body) => {

  if (typeof(response) != 'undefined') {
    const data = JSON.parse(body);
     
    if (typeof(data[0]) != 'undefined') {
      console.log(data[0].description);
    } else {
      console.log('Breed Not Found')
    }
  } else {
    console.log(error)
  }

 

});


