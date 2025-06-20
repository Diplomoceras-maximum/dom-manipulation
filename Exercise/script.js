const container = document.querySelector("#container"); // get reference to the container div
const content = document.createElement("div"); // create a new div and store in variable content

content.classList.add("content"); // add class "content" to the div
content.textContent = "This is the glorious text-content!"; // add text to the div
container.appendChild(content); // append the new div as a child of container

/* The DOM tree looks like this after:

    <body>
        <h1>THE TITLE OF YOUR WEBPAGE</h1>
        <div id="container">
            <div class="content">This is the glorious text-content!</div>
        </div>
    </body>

*/

// Exercise:

const redText = document.createElement("p");
const blueHeading = document.createElement("h3");
const pinkDiv = document.createElement("div");
const imDiv = document.createElement("h1");
const meToo = document.createElement("p");

redText.textContent = "Hey I'm red!";
redText.style.color = "red";

blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";

pinkDiv.setAttribute(
  "style",
  "border: 1px solid black; background-color: pink;"
);

imDiv.textContent = "I'm in a div";
meToo.textContent = "ME TOO!";

pinkDiv.appendChild(imDiv);
pinkDiv.appendChild(meToo);
container.appendChild(redText);
container.appendChild(blueHeading);
container.appendChild(pinkDiv);
