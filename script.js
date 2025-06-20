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
