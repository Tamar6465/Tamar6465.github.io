console.log('ajax-demo');
document.addEventListener('DOMContentLoaded', onLoad);
let choose = document.getElementById("choose");
function onLoad() {

    const url = 'https://swapi.dev/api/people';
    const url2 = 'https://swapi.dev/api/films'
    if (choose="1") {
         getUrl(url);
    }
    
   if (choose="2") {
          getUrl(url2)
   }
   if (choose="3") {
       getUrl2(url);
   }

    //document.querySelector('#show-more').addEventListener('click', showMore);
}

function getData(response) {
    let people = response.results;
    const nextUrl = response.next;
    let peopleList = document.getElementById('people-list');
    if (choose="1") {
    people.forEach(element => {
        if (element.name === "Luke Skywalker") {
            let li = document.createElement('li');
            li.innerHTML = `${element.eye_color} ${element.height}`;
            peopleList.append(li);
        }
    });
}
if (choose="2") {
    people.forEach(element => {
        if (element.director === "George Lucas") {

            let li = document.createElement('li');
            li.innerHTML = `${element.title}`;
            peopleList.append(li);
        }
    });
}
  
}

function peopleFilmes(response) {
    let people = response.results;
    people.forEach(element => {
        if (element.name === "Darth Vader") {
            filmesArr(element.films);
        }

    });
}
function filmesArr(filmes) {
for (let index = 0; index < filmes.length; index++) {  
    getUrl3(filmes[index]);   
}
    
}

function showFilmes(response) {
    let peopleList = document.getElementById('people-list');
    let li = document.createElement('li');
    li.innerHTML = `${response.title}`;
    peopleList.append(li);
}
function getUrl(url) {
    const request = new XMLHttpRequest();
    request.responseType = 'json'; //application/json
    request.addEventListener('readystatechange', () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            getData(request.response);
        }
    });
    request.open('GET', url);
    request.send();
}

function getUrl2(url) {
    const request = new XMLHttpRequest();
    request.responseType = 'json'; //application/json
    request.addEventListener('readystatechange', () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            peopleFilmes(request.response);
        }
    });
    request.open('GET', url);
    request.send();
}
function getUrl3(url) {
    const request = new XMLHttpRequest();
    request.responseType = 'json'; //application/json
    request.addEventListener('readystatechange', () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            showFilmes(request.response);
        }
    });
    request.open('GET', url);
    request.send();
}
