const body = document.body;
const head = document.head;


body.style.backgroundColor = "green";

console.log("hello javascript file is connected")

const title = document.createElement("title")
title.innerHTML = "DOMS LESSON 1" 

console.log(title)

head.append("title");

//--------------------------------------------------
const pageHeading = document.getElementsByTagName("heading")
console.log(pageHeading)
pageHeading.innerText = "Tuesday"

//querySelector
//querySelectorAll
//getElementsByTagName
//getElementByClassName
//getElementById

//to add any html element created through js we have to append it to the body 

const para = document.createElement("p")
para.innerText = "this is part of the paragrapgh tag"
body.append(para); 


const firstHeading = document.querySelector("h1")
firstHeading.style.color =  "white";

const container = document.createElement("div")
container.style.width = "200px"
container.style.height = "200px"
container.style.backgroundColor = "white"
container.style.border = "1px"
container.style.borderBlock = "solid"
container.style.borderColor = "blue"


body.append(container)

firstHeading.innerText = "this will be updated "