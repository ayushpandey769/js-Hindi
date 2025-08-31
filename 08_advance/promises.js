//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.*/

/*A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
 A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
 Instead, a then() handler must check the Response.ok and/or Response.status properties. */

const promiseOne = new Promise( (resolve , reject) => {
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise consumed 2");
    
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Harsh", email: "h@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Harsh", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally( () => {console.log("The promise is either resolved or rejected");
} )


const promiseFive = new Promise( (resolve , reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascrpit", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
} )

// async function consemePromiseFive() {
//     const response = await promiseFive 
//     console.log(response);
// }
async function consumedPromiseFive() {
   try {
     const response = await promiseFive 
     console.log(response);
 }
    catch (error) {
    console.log(error);
   }
}
consumedPromiseFive()


// async function getAllUsers() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
    
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
    
//    }
    
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (response) => {
//     return response.json()
// } )
// .then( (data) => {console.log(data);
// } )
// .catch ( (error) => {console.log(error);
// } )



fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
} )
.then( (data) => {console.log(data);
} )
.catch ( (error) => {console.log(error);
} )
