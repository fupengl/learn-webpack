const greeting = require("./greeting");

const element = window.document.createElement("h3");
element.innerHTML = greeting;
window.document.body.appendChild(element);
