/* Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

Obtain a reference the element with a class of dashed and remove it.

Obtain a reference the element with a class of article__footer and add the class of goldenrod it. */


let articleHeader = document.querySelector(".article__header");
articleHeader.textContent = 'Welcome to the Evan Reynolds blog';

let articleHeaderAll = document.querySelectorAll(".article__header");
for (let i = 0; i < articleHeaderAll.length; i++) {
  articleHeaderAll[i].classList.add("important")
}

let dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

let articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");