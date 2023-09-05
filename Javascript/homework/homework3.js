//q1 Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).

var hero = "Spiderman"

if(hero === "Wolverine" || hero ===  "Batman" || hero ===  "Superman"){
    console.log('${hero} is a dc hero')
}else if(hero === "Spiderman" || hero ===  "Hulk" || hero ===  "Ironman" ){
    console.log('${hero} is a marvel hero')
}else{
    console.log("His a villian run away")
}

//q2 write a conditional statement taking age as variable and what year group they will be in a school 

const age = 19

if(typeof age === "string"){
    console.log("error")
}else if( age >=11 && age<16){
    console.log("your in secondary school")
}else if( age >=16 && age<=18){
    console.log("college")
}else if( age >18){
    console.log("optional education")
}else if( age<11 && age>3){
    console.log("primary school")
}else{
    console.log("optional education")
}

//q3 reate a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. if above 5 print out error and if less than 5 print out error.

var array = [1,2,3,4,5]

if(typeof array != "object" || array.length>5 || array.length<5){
    console.log("error")
}else{
    console.log("list has 5 items")
} 


