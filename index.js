let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

let xx = 10;
let yy = xx;

console.log ("Pre increment");
 yy = ++xx;
 console.log(xx);
 console.log(yy);

 console.log("Post increment");
 
 yy = xx++;
 console.log(xx);
 console.log(yy);

 for (let i=0; i <=10; i++) //i starts at 0 and increments by one while its less than 10, then stops at 10
 console.log(i);

 let z =1;
 console.log(z);
 console.log(10 * ++z); //this is not being changed because the value of z hasnt been included in the 10* operation, only incremented
 console.log(z);
 console.log(z= 10 * ++z); //this is the command that would need to be used if we want the above console log to show 20.

 const firstWord = "hello ";
 const secondWord = "world";
 console.log(firstWord + secondWord)
 console.log(`${firstWord} ${secondWord}`) //removes the necessity for adding variables with spaces, pluses and other strings

 console.log(10 + 5) //adds the sum of two numbers 10 and 5
 console.log(10 + '5') //displays the number 10 to the string 5
 console.log('10' + 5) //displays the string 10 and the number 5
 console.log(10 + 10 + '5') //adds the numbers 10 and 10, displays string 5
 console.log('10' + '10') //displays two strings of 10

 console.log( +true) //converts true to binary 1
 console.log( +false) //converts false to binary 0

 let xy = 10
 console.log(xy)
 xy += 20;
 console.log(xy)
 xy -= 10;
 console.log(xy)
 xy *= 10;
 console.log(xy)
 xy /= 10;
 console.log(xy)
 xy %= 10;
 console.log(xy)
 xy **= 10;


 //if () {}

 let num = 10
 let numTwo = 10

 if (num == numTwo) {
     console.log("numbers are equal")
 };

 console.log(1 == "1") //this is displaying because theyre equal, no matter of the data type
 console.log(1 === "1")  //this is displaying because a string is not the same as a number data type
 console.log(" ") //each calculation below is displaying because of the same reasons as i just commented

 console.log(1 == true) //in binary 1 means true so this shows 1 is equal to true
 console.log (1 === true)
 console.log(" ")

 console.log(0 == false) //in binary 0 means false so this shows 0 is equal to false
 console.log(0 === false)

 console.log(null == undefined)
 console.log(null === undefined)

 console.log(null + 1) //null equals 0 so zero plus one = 1
 console.log(undefined > 0) //you cant do any comparisons with undefined, it only equals null
 console.log(undefined + 1) //you also cant do maths with undefined so it returns not a number