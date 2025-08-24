const name = "Harsh" //1st way to declare string
let age = 23

// console.log(name + age + " value");

console.log(`Hello my name is ${name} and my age is ${age}`);

//2nd way
 const gameName = new String('harsh-hc-com')
 //output comes with index but it is not array

 console.log(gameName[2]);
 console.log(gameName.__proto__);

 
//   console.log(gameName.length);
//    console.log(gameName.toUpperCase());
//     console.log(gameName.charAt(2));
    console.log(gameName.indexOf('r'));

    const newString = gameName.substring(0 , 3)
    console.log(newString);
    
const anotherString = gameName.slice(-7 , 3)
console.log(anotherString);

const newStringOne = "     harsh      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://harsh.com/harsh%20pandey"

console.log(url.replace('%20' , '-'))

console.log(url.includes('mama'));

console.log(gameName.split('-'));


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words);

console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars);

console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
