// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

// unnamed iife
( (name) => {
    console.log(`db connected ${name}`);
})('jai')
