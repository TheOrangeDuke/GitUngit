/*
 *  function name 
 */
function name(){
    console.log("Hi, my name is robert");
    console.log("Hi, my name is bob");

    clock();
    randomNumber();
}

function randomNumber(){
    var alpha = Math.floor(Math.random() * 11);
    console.log(alpha);
}

function clock(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    console.log(h + ":" + m + ":" + s);
}