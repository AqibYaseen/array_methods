
let x;
function fun1(){
    x =2-2;
}
fun1();

let fun2 = function(){
    x = "anonymous function"
}
fun2();
let fun3=()=>{
    x="Fat arrow function";
}

fun2();
fun3();
console.log(x);

