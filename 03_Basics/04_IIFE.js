//Immediately Invoked Function Expression
//Used to prevent from pollution of global scope

(function chai(){
    //Named IIFE
    console.log("DB Connected");   
})();

( (name) => {
    console.log(`DB Connected 2 ${name}`);
})("Harsh")