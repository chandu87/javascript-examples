/* Exercise 1
What does this function log out:
*/
console.log("HI");

function returnStringOld() {
    let hello = 'hello world';
    
    for (let i =0;i<5;i++){
        hello = hello + "," + i;
    }
    return hello;
}

console.log(returnStringOld());  // what logged




function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

getAjaxData("https://api.spacexdata.com/v2/launches",function(repoList){
    // console.log(repoList);
    
    let arraySuccess = repoList.filter(function(element){
            return element.launch_success;
    });
    let spanName = document.querySelector(".rocket-name");
    // console.log(arraySuccess[0].rocket.rocket_name);
    spanName.innerHTML = arraySuccess[0].rocket.rocket_name;
});

const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
const query = 'success';
const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;
getAjaxData(giphyUrl,function(giphyList){
    console.log(giphyList);
    let arrayRatingFour = giphyList.data.filter(function(element){
        return element.rating == 'g';
    });
    console.log(arrayRatingFour);
    let imgDisp = document.querySelector(".gif");
    // console.log(arrayRatingFour[0].images.original.url);
    // imgDisp.src = arrayRatingFour[0].images.original.webp;
    const imgList = document.querySelector(".img-list");
    
    arrayRatingFour.forEach(element => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = element.images.original.webp;
        li.appendChild(img);
        imgList.appendChild(li);        
    });
});


/* Exercise 2 
1. First get all spaceX launches. Using this api: https://api.spacexdata.com/v2/launches and the function i have created above.
2. Then filter the successes. 
3. Take the first launch and set the innerhtml of a span to the rocket_name.
4. Using the giphy api get a url of a gif with the query text of "success". It should have a rating above 4. 
const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
const query = 'smile';
const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;
5. set the src of a img to the gif url (look for the images key in the gifs object). 
*/




/* Exercise 3
1. Create an input element that takes a number from 1-6.
2. Get the number from the input value.
3. Create a ul and add list elements that contains the names of the astronauts from this api: http://api.open-notify.org/astros.json
*/