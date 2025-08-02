import {places} from "./data/placeData.js";
const cards = document.getElementById("place"); 


const displayPlaces = (places) => {
  console.log("Displaying places:", places);
  places.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("places-card", "padding-none", "grid");
    const businessCardHeader = document.createElement("div");
    const name = document.createElement("h2");
    name.classList.add("head-font");
    name.textContent = place.name; 

    const theAddress = document.createElement("address");
    theAddress.innerText = place.address;
    theAddress.classList.add("body-font");

    const description = document.createElement("p");
    description.innerText = place.description;
    description.classList.add("body-font");
    const imageurl = document.createElement("img");
    imageurl.setAttribute("src", place.photoUrl); 
    imageurl.setAttribute("alt", `Image of ${place.name}`);
    imageurl.setAttribute("loading", "lazy");
    imageurl.setAttribute("width", "150");
    imageurl.setAttribute("height", "150");

    businessCardHeader.appendChild(name);
    card.appendChild(businessCardHeader);
    card.appendChild(imageurl);
    card.appendChild(theAddress);
    card.appendChild(description);

    cards.appendChild(card);
  });
}

displayPlaces(places);

//localstorage
const messageEl = document.getElementById('visitMessage');


const lastVisit = localStorage.getItem('lastVisit');

const now = new Date();

if (lastVisit) {
  const lastVisitDate = new Date(lastVisit);
  const diffMs = now - lastVisitDate; 


  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  
  let message = '';

  if (diffDays < 1) {
    message = "Back so soon! Awesome!";
  } else if (diffDays < 7) {
    message = "It's been a few days since your last visit.";
  } else {
    message = "It's been a while since your last visit.";
  }

  
  document.getElementById('visitMessage').textContent = message;
} else {

  document.getElementById('visitMessage').textContent = "Welcome! Let us know if you have any questions";
}


localStorage.setItem('lastVisit', now.toISOString());