// varibale declartion using const.....
const joketest =document.getElementById('joketext');
const newbtn =document.getElementById('new');

newbtn.addEventListener('click', getJoke);
getJoke();

function getJoke() {
  // api fetching ....
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
      // promises in javscript.....
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      let joke = data.joke;
      // implementation of javascript dom... 
    document.getElementById('joketext').innerText = joke;
     });
  }