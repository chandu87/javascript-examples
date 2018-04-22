function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}


fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function (repoList) {
    const ulList = document.querySelector("#repoList");
    const curriculum = ["HTML-CSS", "Node.js", "Git"]; 
    repoList.forEach(function(repo){
        const li = document.createElement('li');
        li.textContent = repo.name;
        ulList.appendChild(li);
    });
});



