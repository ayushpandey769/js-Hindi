const userEmail = "h@gmail.com"

// if (userEmail){
//     console.log("Got user Email");
// } else {
//     console.log("Don't have user Email");
// }

// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values

// "0" , 'false' , " " , [] , {} , function(){}

const emptyArr = []

if (emptyArr.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0 => true
// false == '' => true
// 0 == '' => true


