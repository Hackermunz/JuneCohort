const body = document.body;
const head = document.head;
let titleHeading = document.getElementById('title');
let updateName = document.getElementById('dom')
const dateHolder = document.querySelector('h3');
const h4 = document.createElement("h4");
const orderedlist = document.createElement("ol")
const listItem1 = document.createElement("li")
const listItem2= document.createElement("li")
const listItem3 = document.createElement("li")
const btn = document.createElement("button")


const date = new Date()
var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

console.log(months[9])


h4.innerText = "Coding language im currently learning"
dateHolder.innerText = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`
titleHeading.innerText = "Homework 1 is all about DOMS"
updateName.innerText = "My name is Munsar"



orderedlist.append(h4)
listItem1.innerText = "HTML"
orderedlist.append(listItem1)
listItem2.innerText = "CSS"
orderedlist.append(listItem2)
listItem3.innerText = "JS"
orderedlist.append(listItem3)

btn.innerText = "Click me"



body.append(orderedlist)
body.append(btn)

function response(){
    btn.innerText = "Body has been Clicked"
    body.style.backgroundColor = "pink"
    body.style.color = "white"
}


body.addEventListener("click", response)
btn.addEventListener("toggle", function(){
    console.log("Hello")
})


body.style.backgroundColor = "Coral";
 