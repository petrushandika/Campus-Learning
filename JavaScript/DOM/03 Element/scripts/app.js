// Element
const title = document.getElementById("title");
title.textContent = "Learning JavaScript";

const description = document.getElementById("description");
description.textContent = "Today, we want learning JavaScript DOM";

// Element Method
const another = document.querySelector(".another").remove();

// Create Element
const content = document.getElementById("content");

const text = document.createElement("p");
text.textContent = "We create the new element";
content.appendChild(text);