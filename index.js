function randomnum() {
    //this function generates a random number between 1-100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('displayinput').value += randomNumber;
  }

  function increment(x){
    document.getElementById('displayinput').value += x;
  }
  