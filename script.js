const likes = document.querySelector("span"); //like count
const likeTwo = document.querySelector(".like-button"); //like count for car #2
const commentsList = document.querySelector("ul");
const title = document.querySelector("#card-title");
const likeCount = document.querySelector("#like-count");

fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json").then(
  (response) => response.json().then((carData) => carData)
);
// Each car will have a "like" button, a section to have comments and "submit" it.

//click on the heart button and your likes will increase
const likeButton = document.querySelectorAll("#like-button");
likeButton.addEventListener("click", addLike);
function addLike() {
  //get the span with the likes e.target.parentElementChild
  //break up string, parseInt and add 1, reset span textContent

  const likeCount = parseInt(likes.textContent.split(" ")[0]);
  likes.textContent = `${likeCount + 1} likes`;
}

// Car #2 is working like I want it. This needs work
const likeButtonTwo = document.querySelector("#like-button-two");
likeButtonTwo.addEventListener("click", addLike);
function addLike() {
  const likeCount = parseInt(likes.textContent.split(" ")[0]);
  likes.textContent = `${likeCount + 1} likes`;
}

//Be able to add a comment regarding car
//This is for car #1 and it is function properly
const commentForm = document.querySelectorAll("#comment-form");
const commentInput = document.querySelectorAll("#comment");
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = commentInput.value;
  commentsList.appendChild(li);
  e.target.reset();
});

// querySelectorAll("like-buttons")
// e.target.parentElement.firstElementChild.textContent
