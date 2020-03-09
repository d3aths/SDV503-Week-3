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