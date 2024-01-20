//q1 supposedly we have a list of numbers [1,2,3,45,90,125,2001,1001]
//identify and print the largest number in the array. e.g example above 2001 should be the answer

var array = [1,2,3,45,90,125,2001,1001]
//console.log(Math.max(...array))

function findLargestValue(array){
    var list = [0]
    for (let i=0; i<array.length;i++){
        if(list[0]<array[i]){
            console.log(list)
            console.log(list[0]>array[i])
            list.shift()
            list.push(array[i])
            
        }
    }
    console.log(list)
}

findLargestValue(array)


//lets say we have a word “thequickbrownfoxjumpsoverthelazydog” remove every character that appears more than 
//once (will need to search for a method in js that checks if a string holds the same character already).
// so the answer should reveal “thequickbrownfxjmpsvlazydg”

var word1 = "thequickbrownfoxjumpsoverthelazydog"
var word2 = []

function repeatedCharacter(word){
   
    word = word1.split('')
   
   for(let i=0; i<word.length;i++){
        console.log(word2)
     if(word2.includes(word[i])){
        console.log("nothing")
     }else{
        word2.push(word[i])
    }
   }
    console.log(word2.join(''))
}

repeatedCharacter(word1)