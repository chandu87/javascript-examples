console.log("hi");

function getAjaxData(url) {
  return new Promise((resolve, reject) => {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener("load", function() {
      // This in here is our callback function
      // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (this.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject("error");
      }
    });

    request.addEventListener("error", function(error) {
      reject(error);
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
  });
}

// const fetchMoviesPromise = getAjaxData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");

// fetchMoviesPromise
//     .then((movies)=>{
//         setTimeout(()=>{
//             console.log(movies);
//         },3000);
//         return new Promise((resolve, reject)=>{

//         })
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

const timeOutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});

timeOutPromise
    .then(message => {
        console.log(message);
        return getAjaxData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
    })
    .then((moviesData)=>{
    console.log(moviesData);
    return getAjaxData('https://www.reddit.com/r/ProgrammerHumor.json');
    })
    .then((redditData)=>{
        console.log(redditData);
    });
