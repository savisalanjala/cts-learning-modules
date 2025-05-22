// 1. JavaScript Basics
console.log("Welcome to the Community Portal");

function pageLoaded() {
  alert("Page fully loaded!");
}

// 2. Syntax, Data Types
const eventName = "Music Festival";
const eventDate = "2025-06-10";
let seatsAvailable = 5;
console.log(`${eventName} on ${eventDate}, Seats left: ${seatsAvailable}`);

// 3. Conditionals & Loops
const events = [
  { name: "Music Festival", date: "2025-06-10", category: "music", seats: 5 },
  { name: "Art Fair", date: "2025-06-17", category: "art", seats: 0 },
  { name: "Tech Workshop", date: "2025-04-15", category: "workshop", seats: 3 },
];

// 4. Functions, Closures, Callbacks
function addEvent(event) {
  events.push(event);
}

function registerUser(eventName) {
  try {
    let event = events.find(e => e.name === eventName);
    if (!event || event.seats <= 0) throw "Registration failed!";
    event.seats--;
    alert(`Registered for ${event.name}`);
  } catch (err) {
    alert(err);
  }
}

function filterEventsByCategory(category) {
  return events.filter(e => category === "all" || e.category === category);
}

// Closure example
function categoryCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const musicCount = categoryCounter();

// 5. Objects & Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};
const e1 = new Event("Local Meetup", "2025-08-01", 10);

// 6. Array Methods
function displayEventCards(filteredEvents) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";

  filteredEvents.map(event => {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
      <button onclick="registerUser('${event.name}')">Register</button>
    `;
    container.appendChild(card);
  });
}

// 7. DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
  displayEventCards(events);
});

// 8. Event Handling
document.getElementById("categoryFilter").onchange = (e) => {
  const filtered = filterEventsByCategory(e.target.value);
  displayEventCards(filtered);
};

document.getElementById("searchBox").onkeydown = (e) => {
  const query = e.target.value.toLowerCase();
  const result = events.filter(ev => ev.name.toLowerCase().includes(query));
  displayEventCards(result);
};

// 9. Async / Fetch Simulation
async function fetchEvents() {
  document.getElementById("eventList").innerHTML = "Loading...";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 1000);
  });
}

// 10. Modern Features
const showDetails = ({ name, date }) => {
  console.log(`Event: ${name}, Date: ${date}`);
};
showDetails(events[0]);

// 11. Working with Forms
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event } = this.elements;
  if (!name.value || !email.value) {
    document.getElementById("formMsg").textContent = "All fields required.";
    return;
  }
  document.getElementById("formMsg").textContent = "Registration successful!";
});

// 12. AJAX with fetch
function sendRegistration(data) {
  setTimeout(() => {
    console.log("Submitted:", data);
    alert("Registration submitted!");
  }, 1000);
}

// 14. jQuery (if included)
$(document).ready(() => {
  $('#registerBtn').click(() => {
    $('#formMsg').fadeIn().text("Thanks for using jQuery!");
  });
});
