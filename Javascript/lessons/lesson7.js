//Objects
//what are they
//purpose?
//key & value pairs
//dot notation and "this"
//accessing properties updating, deleting, adding 
//contructor


//const car = {
    //name:"Nissan",
    //colour:"black",
    //make:2023,
  //  type:"Juke"
//}
    
//console.log(car.type)
//car.owner = "munz"
//car.colour = "grey"
//car.type = "Juke2023"
//console.log(car)

//const list = {
   // img: "set",
    //title: "title of product",
    //price: "price of product"
//}

/*const person = {
    firstName: "Munz",
    lastName: "Mo",
    age: 20,
    
    fullName: function(){
        return this.firstName+" "+this.lastName
    
    }

}
console.log(person.fullName())*/

function Person(name,lastName,age,gender){

    this.firstName = name
    this.lastName = lastName
    this.age = age
    this.fullName = function(){
        return this.firstName + " " + this.lastName
     }
    
     if(gender){
        this.gender = gender 
    }else{
        this.gender = "male"
    }
    
    }

const Munz = new Person("Munz", "Mo",20)
const Abdi= new Person("Abdi", "Ahmed",21)
const Jane = new Person("Jane", "Smith",23,"female")

console.log(Munz)
console.log(Abdi)
console.log(Jane)