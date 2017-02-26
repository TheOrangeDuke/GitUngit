/*
 *  function name 
 */
function name(){
    console.log("Hi, my name is robert");
    console.log("Hi, my name is bob");

    clock();
}

function clock(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    console.log(h + ":" + m + ":" + s);
}