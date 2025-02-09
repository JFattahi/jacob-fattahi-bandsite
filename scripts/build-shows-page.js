/**
 * This script will rendor the shows section in the shows.html
 *
 *
 *
 *
 */
const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
const API_KEY = "eea8ae78-e00d-4379-b5f9-bca9bbc688e4";

// turn ms from epoch to desired date format
const formattedDate = (timestamp) => new Date(timestamp).toDateString();

// gets the showDates Array from API
async function getShowsArray() {
  let result;
  try {
    result = await axios.get(`${BASE_URL}/showdates?api_key=${API_KEY}`);
  }catch (error){
    console.log(error)
  }
  return result.data;
}

// shows Array gotten from the server
let showsArray2;


// -------------------------------------------------- create show card ---------------------------------------
// show is an object in shows array
function createShowCard(show) {

  const showCard = document.createElement("article");
  showCard.classList.add("show__card");

  const showDateLabel = document.createElement("p");
  showDateLabel.classList.add("show__label");
  showDateLabel.textContent = "Date";

  const showDate = document.createElement("p");
  showDate.classList.add("show__date");
  showDate.textContent = formattedDate(show.date);

  const showVenueLabel = document.createElement("p");
  showVenueLabel.classList.add("show__label");
  showVenueLabel.textContent = "Venue";

  const showVenue = document.createElement("p");
  showVenue.classList.add("show__venue");
  showVenue.textContent = show.place;

  const showLocationLabel = document.createElement("p");
  showLocationLabel.classList.add("show__label");
  showLocationLabel.textContent = "Location";

  const showLocation = document.createElement("p");
  showLocation.classList.add("show__location");
  showLocation.textContent = show.location;

  const showButton = document.createElement("button");
  showButton.classList.add("show__button");
  showButton.textContent = "Buy Tickets";

  showCard.appendChild(showDateLabel);
  showCard.appendChild(showDate);
  showCard.appendChild(showVenueLabel);
  showCard.appendChild(showVenue);
  showCard.appendChild(showLocationLabel);
  showCard.appendChild(showLocation);
  showCard.appendChild(showButton);

  showCard.addEventListener("click", function () {
    const allCards = document.querySelectorAll(".show__card");
    allCards.forEach((card) => card.classList.remove("selected"));
    showCard.classList.add("selected");
  });

  return showCard;
}

// creates the   -   Date    Venue    Location  - header for tablet and desktop view
function createShowsHeader() {
  const showsHeader = document.createElement("div");
  showsHeader.classList.add("shows__header");
  const dateHeader = document.createElement("span");
  dateHeader.classList.add("shows__header-label");
  dateHeader.textContent = "Date";
  const venueHeader = document.createElement("span");
  venueHeader.classList.add("shows__header-label");
  venueHeader.textContent = "Venue";
  const locationHeader = document.createElement("span");
  locationHeader.classList.add("shows__header-label");
  locationHeader.textContent = "Location";
  const emptySpace = document.createElement("span");
  emptySpace.classList.add("shows__header-label");
  emptySpace.textContent = " ";

  showsHeader.appendChild(dateHeader);
  showsHeader.appendChild(venueHeader);
  showsHeader.appendChild(locationHeader);
  showsHeader.appendChild(emptySpace);

  return showsHeader;
}

function renderShows() {
  const showsSection = document.createElement("section");
  showsSection.classList.add("shows");
  const showsHeader = createShowsHeader();
  showsSection.appendChild(showsHeader);
  // call to Array
  showsArray2.forEach( (show) => {
    console.log(show);
    const showCard = createShowCard(show);
    showsSection.appendChild(showCard);
  });

  document.getElementById("main").appendChild(showsSection);
}

// ---------------------------------------- execute ---------------------------------------


async function renderAll() {
  showsArray2 =  await getShowsArray();
  renderShows();
}
renderAll();

