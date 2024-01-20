//Using a loop, print numbers from 1 to 100 but here’s the catch, multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”. Lastly print “FizzBuzz” for multiples of three and five.

for (let i =1 ; i<101; i++){
    if (i%15===0){
          console.log("FizzBuzz")
    }else if(i%5===0){  
        console.log("Buzz")
    }else if(i%3===0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}
