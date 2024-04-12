// Node
const menu = document.getElementById("menu");
console.log(menu);
console.log(menu.children);

const second = document.getElementById("second");
console.log(second.previousSibling);
console.log(second.nextSibling.nextSibling);

// Node Method
menu.removeChild(document.getElementById("first"))
menu.removeChild(document.getElementById("second"))
menu.removeChild(document.getElementById("third"))