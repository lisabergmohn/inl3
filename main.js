"use strict";

//Uppgifft 1

document.getElementById("success").addEventListener("click", () => {
  var showSuccess = document.getElementById("message-box").classList;
  showSuccess.add("success");
});

document.getElementById("error").addEventListener("click", () => {
  var showError = document.getElementById("message-box").classList;
  showError.add("error");
});

document.getElementById("info").addEventListener("click", () => {
  var showInfo = document.getElementById("message-box").classList;
  showInfo.add("info");
});

//Uppgift 2

var body = document.querySelector("body");
var items = document.getElementById("items");

document.getElementById("add-item").addEventListener("click", () => {
  var message = prompt("");

  const newLi = document.createElement("li");
  items.appendChild(newLi);
  newLi.innerHTML = message;
});

//Uppgift 3
var textNode = document.createTextNode("Radera text");
var btn = document.createElement("button");

btn.appendChild(textNode);
body.appendChild(btn);

btn.addEventListener("click", () => {
  var lastElement = items.lastElementChild;
  if(items.lastElementChild) {
      items.lastElement.remove();
  }

});

//Uppgift 4
var buttons = document.getElementsByClassName('remove-list-item');

for (var i = 0; i < buttons.length; i++) {
  
  buttons[i].addEventListener('click', function() {
        if(confirm('Remove?'))
        this.parentElement.remove();
  })
  
}


//Uppgift 5 del 1
var form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const firstname = this.elements.firstname.value;
    const lastname = this.elements.lastname.value;
    const age = parseInt(this.elements.age.value);
    const email = this.elements.email.value;
    const pet = this.elements.pet.value;

    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(email);
    console.log(pet);

    //Uppgift 5 del 2
    if((firstname.length > 0 && firstname.length < 50) && (lastname.length > 0 && lastname.length < 50) && (!isNaN(age) && age > 0) && (email.length > 0 && email.length < 50) && (pet.length > 0)) {
      e.target.submit();
    } else {
      alert('Fill out form');
    }

});

  

