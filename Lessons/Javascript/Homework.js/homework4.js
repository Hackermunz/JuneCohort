//q1 Write a conditional statement that takes into consideration validations (i.e case sensitivity). this will be entire up to you as to what the conditional statement is on.

var day = "FRIDAY"

if(day.toLowerCase()==="friday"){
    console.log("thats a day of the week")
}else{
    console.log("error")
}

//example of nested conditional

var day = 1

if (typeof day === "string"){
    if(day.toLowerCase()==="friday"){
        console.log("thats a day of the week")
    }else{
        console.log("i do not recognise that day")
    }
}else{
    console.log("error variable does not contain a string")

}

//q2 Write a conditional statement that prints whether the phone being used is an Iphone or an android
    
var phone = "android".toLowerCase()

if(typeof phone === "string"){
    if(phone === "iphone"){
    console.log("phone is a iphone")
}else{
    console.log("phone must be an android")
    }
}


//q3 Write a switch case that checks if the operation is a math operation (+,-,*,/) if the options is any of the options given it should give me the result of 2 variables created above the switch case. For example. math operation is * and the variables are 250 & 10 then the answer should log 2500

var num1 = 5
var num2 = 5
var operation = "*"

if(typeof operation === "string"){
    switch(operation){
        case "+":
            console.log(num1+num2)
            break;
        case "-":
            console.log(num1-num2) 
            break;
        case "/":     
            console.log(num1/num2)
            break;
        case "*":
            console.log(num1*num2)
            break;
        default:
            console.log("do not recognise that operator")
            break;
    }




}
    



