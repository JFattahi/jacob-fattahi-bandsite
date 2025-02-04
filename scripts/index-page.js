/* ***********************************************************
 * js code related to the comments section in the bio page
 *
 *
 *
 *********************************************************** */

// Array holding the comments
const commentsArray = [
  {
    commenterName: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    avatar: "../assets/images/avatar.png",
  },
  {
    commenterName: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    avatar: "../assets/images/avatar.png",
  },
  {
    commenterName: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    avatar: "../assets/images/avatar.png",
  },
];

// Creates a comment block with a given comment
function createCommentBlock(comment) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("commenter");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("commenter__content");

  const avatar = document.createElement("img");
  avatar.src = "../assets/images/avatar.png";
  avatar.classList.add("commenter__avatar");

  const textDiv = document.createElement("div");
  textDiv.classList.add("commenter__text");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("commenter__header");

  const nameElement = document.createElement("h3");
  nameElement.classList.add("commenter__name");
  nameElement.textContent = comment.commenterName;

  const dateElement = document.createElement("span");
  dateElement.classList.add("commenter__date");
  dateElement.textContent = comment.date;

  const commentText = document.createElement("p");
  commentText.classList.add("commenter__comment");
  commentText.innerText = comment.comment;

  headerDiv.appendChild(nameElement);
  headerDiv.appendChild(dateElement);
  textDiv.appendChild(headerDiv);
  textDiv.appendChild(commentText);
  contentDiv.appendChild(avatar);
  contentDiv.appendChild(textDiv);
  cardElement.appendChild(contentDiv);

  return cardElement;
}

// creates the comments article with the comments array
function renderComments() {
  const myCommentersElement = document.querySelector("#comments");
  myCommentersElement.innerHTML = "";
  commentsArray
    .slice()
    .reverse()
    .forEach((comment) => {
      const card = createCommentBlock(comment);
      myCommentersElement.appendChild(card);
    });
}

function formatDate(date) {
  const myDate = new Date(date);
  const month = String(myDate.getMonth() + 1).padStart(2, "0");
  const day = String(myDate.getDate()).padStart(2, "0");
  const year = myDate.getFullYear();

  return `${month}/${day}/${year}`;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const commenterName = event.target.commenterName.value;
  const commentText = event.target.commentText.value;

  const cardData = {
    commenterName,
    date: formatDate(new Date()),
    comment: commentText,
  };

  commentsArray.push(cardData);
  const myCommentersElement = document.querySelector("#comments");
  const newCard = createCommentBlock(cardData);
  myCommentersElement.prepend(newCard);

  formElement.reset();
}

const formElement = document.getElementById("commenter-form");
formElement.addEventListener("submit", handleFormSubmit);
renderComments();
