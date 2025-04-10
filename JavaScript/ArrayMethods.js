
/*----------Array Methods in JS-------------//////*/

/*------PUSH()-Adding an element to the end of an array-------*/
let myArray = ['A','B','C','E'];
console.log(myArray);
//adding extra items to array
myArray.push('F')
console.log(myArray);

/*------POP()-Remove the last element in the array-----*/
console.log(myArray.pop())


/*------Shift()-Remove the first Element--------*/
let myArray2 = ['anil','Ranil','Nimal'];
console.log(myArray2.shift())
console.log(myArray2)

/*------UNShift()-Add an elements to the start of an array --------*/
console.log(myArray2.unshift("HELLO PEOPLE"))
console.log(myArray2)

/*------CONCAT()-ADDING AN ARRAY TO AN ARRAY --------*/
let myArray3 = myArray.concat(myArray2)
console.log(myArray3) /*---myArray+myArray2----*/


