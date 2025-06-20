// Document Object Model (DOM)

// The DOM is a tree like represenbtation of the contents of a webpage (a tree of nodes)

// Example of the tree:
/*

    <div id="container">
        <div class="display"></div>
        <div class="controls"></div>
    </div>

*/
// Divs with both class of display, and class of controls are child elements of the div with id container
// Div with id of container is the parent
// Both divs inside container are siblings

// To target nodes you use selectors, for example to targt the div with class of display:
// div.display
// .display
// #container > .display
// div#container > div.display

// DOM Methods

// When HTML code is parsed by a browser, it is converted to the DOM
// There are many ways to manipulate webpage with javascript, including:

// Query Selectors
// element.querySelector(selector) - returns a reference to the first match of selector
// element.querySelectorAll(selectors) - returns a "NodeList" containing references to all of the matches of the selectors

// Create Elements
// document.createElement(tagName, [options]) - creates a new element of tag type tagName (does not put element into the DOM)

// Append Elements
// parentNode.appendChild(childNode) - appends childNode as the last child of parentNode
// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode

// Remove Elements
// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child

// Adding Inline Style
const div = document.createElement("div"); // Create element with div variable

div.style.color = "blue"; // adds the indicated style rule (color)
div.style.cssText = "color: blue; background: white;"; // adds several style rules
div.setAttribute("style", "color: blue; background: white;"); // adds several style rules
// When accessing css properties with multiple words, you can use camelCase or kebab-case

// Editing Attributes
div.setAttribute("id", "theDiv"); // if id exists, update it to "theDiv", if not create an id with the value of "theDiv"
div.getAttribute("id"); // returns the value of specified attribute
div.removeAttribute("id"); // removes the specified attribute

// Classes
div.classList.add("new"); // adds class "new" to  div
div.classList.remove("new"); // removes "new" class from  div
div.classList.toggle("active"); // if div doesnt have class "active" then add it, or remove it if div already has the "active" class
// Toggle is often the standard compared to adding and removing

// Adding Text Content
div.textContent = "Hello World!"; // creates a text node and inserts it in div
div.innerHTML = "<span>Hello World!</span>"; // renders the HTML inside div
// textContent is preffered due to innerHTML security risks

// NOTE: DOM manipulation does not alter the HTML or CSS files, it only changes what the browser renders
