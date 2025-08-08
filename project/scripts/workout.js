import {workouts} from "./data/workouts.js";
const cards = document.getElementById("workout"); 


const displayPlaces = (workouts) => {
  console.log("Displaying workouts:", workouts);
  workouts.forEach((workout) => {
    const card = document.createElement("div");
    card.classList.add("workouts-card", "padding-none", "grid");
    const businessCardHeader = document.createElement("div");
    const name = document.createElement("h2");
    name.classList.add("head-font");
    name.textContent = workout.workout_name; 
    const duration = document.createElement("h3");
    duration.classList.add("body-font");
    duration.textContent = workout.estimated_duration;


    const description = document.createElement("p");
    description.innerText = workout.description;
    description.classList.add("body-font");
    const imageurl = document.createElement("img");
    imageurl.setAttribute("src", workout.photoUrl); 
    imageurl.setAttribute("alt", `Image of ${workout.name}`);
    imageurl.setAttribute("loading", "lazy");
    imageurl.setAttribute("width", "150");
    imageurl.setAttribute("height", "150");

    businessCardHeader.appendChild(name);
    card.appendChild(businessCardHeader);
    card.appendChild(imageurl);
    card.appendChild(duration);
    card.appendChild(description);

    cards.appendChild(card);
  });
}

displayPlaces(workouts);

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