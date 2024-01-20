//condintional statement part 2

const age = 24
var occupation = "working"

if(age>24 && occupation ==="student"){
    console.log("no stable income so you do not qualify")
}else if (age>21){
    console.log("stable income and qualify")
}else{
    console.log("sorry you are too young")
}


/*create a condition statement for grading papers score 90 and above is A* 
score above 80 is A
score above 70 is B
score above 60 is C
and anything below is a fail */

var score = 59

if(score>=90){
    console.log("A*")
}else if (score>80){
    console.log("A")
}else if (score>70){
    console.log("B")
}else if (score>60){
    console.log("C")
}else{
    console.log("you failed")
}

var day = "TUESDAY"

switch(day.toLowerCase()){
    case "monday":
        console.log(`its ${day}`)
        break; 
    case "tuesday":
        console.log(`its ${day}`)
        break; 
    case "wednesday":
        console.log(`its ${day}`)
        break; 
    case "thursday":
        console.log(`its ${day}`)
        break; 
    case "friday":
        console.log(`its ${day}`)
        break; 
    case "saturday":
        console.log(`its ${day}`)
        break; 
    case "sunday":
        console.log(`its ${day}`)
        break; 
    default:
        console.log("not possible")
        break;
}



