/**
 * This script will rendor the shows section in the shows.html
 *
 *
 *
 *
 */

// hold the info for the shows
const showsArray = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function createShowCard(show) {
  const showCard = document.createElement("article");
  showCard.classList.add("show__card");
  const showDateLabel = document.createElement("p");
  showDateLabel.classList.add("show__label");
  showDateLabel.textContent = "Date";
  const showDate = document.createElement("p");
  showDate.classList.add("show__date");
  showDate.textContent = show.date;
  const showVenueLabel = document.createElement("p");
  showVenueLabel.classList.add("show__label");
  showVenueLabel.textContent = "Venue";
  const showVenue = document.createElement("p");
  showVenue.classList.add("show__venue");
  showVenue.textContent = show.venue;

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

// creates the   -   Date    Venue     Location  - header for tablet and desktop view
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
  showsArray.forEach((show) => {
    const showCard = createShowCard(show);
    showsSection.appendChild(showCard);
  });

  document.body.appendChild(showsSection);
}

renderShows();
