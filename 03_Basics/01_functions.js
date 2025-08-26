function sayMyName(){
 console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
}

sayMyName //reference
// sayMyName()//execution

// function addTwoNumbers(number1, number2){//parameters
//     console.log(number1 + number2);   
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    return number1 + number2
}

// addTwoNumbers(3, "4")//arguments

const result = addTwoNumbers(3, 5)
// console.log("Result :", result);


function userLoginMessage(username){
    if(!undefined){
        console.log("Please enter the user name");
        return 
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage("Ayushp123"));
// console.log(userLoginMessage());



function calculateCartPrice(val1 ,val2 ,...num1){
    return num1
}
// console.log(calculateCartPrice(200 ,300 ,400 ,2000));

const user = {
    username: "Harsh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Himanshu",
    price: 500
})

const myNewArr = [200 , 400 , 100 , 600]

function returnSecondValue(getArr){
    return getArr[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([1 , 2 , 5 , 8]));
