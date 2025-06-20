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
