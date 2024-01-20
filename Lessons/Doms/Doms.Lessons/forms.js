/* Criteria 
1. name is empty do not pass the form 
2. name is correct pass 
3. name meets length requirements 
4. check name is string
5. if error points that out to user 
6. if success points that out o user
*/
//const pattern =  /^[a-zA-Z]+$/;
/*
1. if email is valid send correct response back 
*/

const body = document.body
const nameInput = document.getElementById("name")
const form = document.querySelector("form")
const lNameInput = document.getElementById("lname") 
const emailInput = document.getElementById("email")


function checkName(){
    let  res = false 
    if(nameInput.value.length>=2 &&nameInput.value.length<=20 ){
        res = stringRegex(nameInput.value)
    }return res
}

function stringRegex(param){
    const pattern =  /^[a-zA-Z]+$/;
    return pattern.test(param)
}

function checklname(){
    let res = false 
    if(lNameInput.value.length>=2 &&lNameInput.value.length<=20 ){
        res =  stringRegex(lNameInput.value)
    }
    return res
}

function checkEmail(){
    let res = false 
    if(emailInput.value.length>0){
        res = emailRegex(emailInput.value)
    }
    return res 
}

function emailRegex(param){
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    return pattern.test(param)
}



form.addEventListener("submit", function(e){
    e.preventDefault()
   
    var firstNameOutcome = checkName(nameInput)
    var lastNameOutcome = checkName(lNameInput)
    var emailOutcome = checkEmail()

    if( firstNameOutcome === true && lastNameOutcome === true && emailOutcome === true ){
        alert("form passes")
    }else{
        alert("form fails")
    }
}) 



/*function checklname(){
    var res = false 
    if(lNameInput.value.length>=2 &&lNameInput.value.length<=20 ){
        res =  stringRegex(lNameInput.value)
    }
    return res
}*/
