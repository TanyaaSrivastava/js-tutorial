( function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB IS NOT CONNECTED ${name}`);
})('tanya')