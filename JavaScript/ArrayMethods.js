
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

/*------Slice()- update a value without modifying the original. Create a shadow copy and Update --------*/

let x = [1,2,3,4,5]
let y = x;
y[0]=299;
console.log(x)
console.log(y) /*Here it updates the x array value too,both x and y values change*/
let z = x.slice();
z[0]=1000;
console.log(z)
console.log(x)

/*Get the shadow copy of the array from the mention element without changing the original*/
let z2 = x.slice(2)
console.log(z2)
/*get the range of the values of the shadow copy without changing the original array*/
let a = [10,20,30,40,50,60,70,80,90,100]
let z3 = a.slice(2,6)
console.log(z3)

/*[-1 means the last element]count from the last element to first,
* get a shadow copy and get the values from the -3 element without changing the original values of the array */
let z4 = a.slice(-3)
console.log(z4)

/*------SPLICE()-REMOVE ELEMENTS FROM THE GIVEN INDEX OF THE ARRAY--------*/
a.splice(6)
console.log(a)
a.splice(2,3)/*REMOVE elements that start from the given index and given count,from the 2 index remove 3 elements*/
console.log(a) /*[10,20,60]= 30,40,50 has removed*/
