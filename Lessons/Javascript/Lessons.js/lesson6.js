//function purpose
//function parameters
//function manipulation 
//return statement

/*function functionName () {
var age = 63
//anything inside a function is a private entity so in oder for your code to appear you must write functionName() outsdie of the code example underneath
console.log(age)
}
functionName () */
//functionName could be anything depending on the code example underneath

function printAge(age, name) {
    console.log(age)
    console.log(name)
}
printAge ("muzzy", 63) 


function errorMessage() {
    var day = 1

    if (typeof day === "string"){
    if(day.toLowerCase()==="friday"){
        console.log("thats a day of the week")
    }else{
        console.log("i do not recognise that day")
    }
    }else{
        errorMessage()

    }
}


function multiply(num1,num2) {
    console.log(num1*num2)
}
multiply(10,10)

//executeFunction(arg) -> function(does function arg) ->goes through function update variables through argument 

var answer = multiply(6,6)

function multiply(num1,num2) {
    ans = "hola world!"
    return ans
}




function addition(num){
    var answer = multiply(6,6)
    console.log(answer + num)
}
addition(36)


//create 2 function celsuis function this temp in C and a converter function that changes C to Farenheit
//(0°C *1.8)+32 = 32 = 32°F

function celsuis(num){
    return(num)
}

function celsuisToFarenHiet(num){
    var converter = celsuis(num)
    var farenheit = (converter *1.8)+32
    console.log(farenheit+ "°F")
}

celsuisToFarenHiet(63)