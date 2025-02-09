/* ***********************************************************
 * js code related to the comments section in the bio page
 *
 *
 *
 *********************************************************** */
// https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=eea8ae78-e00d-4379-b5f9-bca9bbc688e4
const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
const API_KEY = "eea8ae78-e00d-4379-b5f9-bca9bbc688e4";

// turn ms from epoch to desired date format
const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
};

// array to hold comments gotten from API
let commentsArray2;


async function getCommentsArray() {

  let result;
  try {
    result = await axios.get(`${BASE_URL}/comments?api_key=${API_KEY}`);
    console.log("from getCommentsArray() :)");
  }catch (error){
    console.log(error)
  }
  return result.data;

}


// Creates a comment block with a given comment, comment is an object in the array
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
  nameElement.textContent = comment.name;

  const dateElement = document.createElement("span");
  dateElement.classList.add("commenter__date");
  dateElement.textContent = formattedDate(comment.timestamp);

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
  const myCommentersElement = document.getElementById("comments");
  myCommentersElement.innerHTML = "";
  commentsArray2
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


async function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.commenterName.value;
  const comment = event.target.commentText.value;


  const postBody = {
    name,
    comment
  };

  formElement.reset();

  // post the obj
  try {
    await axios.post(`${BASE_URL}/comments?api_key=${API_KEY}`, postBody);
    renderAll();

  } catch (e) {
    console.error(e.response.data.message);
  }


}

const formElement = document.getElementById("commenter-form");
formElement.addEventListener("submit", handleFormSubmit);

// render comments
async function renderAll() {
  commentsArray2 = await getCommentsArray();
  renderComments();

}


renderAll();


