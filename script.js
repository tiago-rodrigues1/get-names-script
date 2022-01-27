var namesStr = "";
var node_list = document.querySelectorAll(".zWGUib");
var namesList = [...nodeList].map((name) => namesStr += `${name.innerText}\n`);
console.log(namesStr)
