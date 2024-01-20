//q.1From you understanding of array create an array with 15 items inside
var listofitem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
listofitem.push("chocolate")
listofitem.pop()

listofitem[1] = "apple"
listofitem[2] = "orange"
listofitem[3] = "chocolate"
listofitem[4] = "milk"
listofitem[5] = "water"
listofitem[6] = "coke"

listofitem.shift()
listofitem.shift()

listofitem.unshift("coke")


console.log(listofitem)

console.log('item 1 = ${listofitems[0]} other items are $(list of items[listofitems.length-1] & $(listofitems[6])}')
