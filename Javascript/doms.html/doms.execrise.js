const body = document.body;
const head = document.head;
const inputName = document.querySelector("input")
const btn = document.createElement("button")


body.addEventListener("click", function(e){
    console.log(inputName.value)

    var array = ["green", "blue", "grey", "black", "pink"]

    if(inputName.value.trim() === ""){
        console.log("error")
        inputName.value = ""
    }else{
        if(array.includes(inputName.value.trim().toLowerCase())){
            body.style.backgroundColor = inputName.value.trim().toLowerCase()
        }else{
            inputName.value = ""
        }
    }


})
