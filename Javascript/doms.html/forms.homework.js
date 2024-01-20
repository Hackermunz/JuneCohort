const body = document.body
const btn = document.querySelector("button") 
const addBtn = document.getElementById("add")


var array = ["green", "blue", "yellow", "pink", "purple", "#34ebc0"]

function changeColor (e){
    var generator = Math.floor(Math.random()*array.length)
    console.log(array[generator])
    body.style.backgroundColor = array[generator]
}

addBtn.addEventListener("click", question);

btn.addEventListener("click", changeColor)


/*
web ask user for colour 
now the generator colour in the array 

1. if the prompt has no value dont store in the variable 
2. if the colour already exist respond back to say it exist 
3. if the colour doesnt exist background shouldnt change 


*/


//console.log(res.length>0)
//if(res.length>0){
//    if(array.includes(res)){
//        alert("colour is in the list")
//        console.log("already in the list")
//    }else{
//        array.push(res)
//    }
//}


function colour(colour){
    if(array.includes(colour)){
        alert("colour is in the list")
        question()
    }else{
        array.push(colour)
    }

}

function question(){
    var res = prompt("what colour would you to add to the background ?")
    if (res.length>0){
    colour(res);
    }
}
