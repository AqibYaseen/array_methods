

let array1= [];
let array2= [8,4,6,8,2,1,3,4,5,8,6,4,8,9,7,5,3,0]
let array3= [];
document.getElementById("insert_before").onclick=function(){
    let valInsertBef = window.prompt('Enter Value to insert in Front of Array :');
    if(valInsertBef!=null){
    array1.unshift(valInsertBef);    
    shwarray();
    }
}
document.getElementById("insert_after").onclick=function(){
    let valInsertaft = window.prompt('Enter Value to insert at Back of Array :');
    if(valInsertaft!=null){
    array1.push(valInsertaft);
    shwarray();
    }
}
document.getElementById("rm_before").onclick=function(){
    if(array1.length!=0){
        array1.shift();
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();
}
document.getElementById("rm_after").onclick=function(){
    if(array1.length!=0){
        array1.pop();
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();
}
document.getElementById("show_array").onclick=function(){
    if(array1.length!=0){
        array1.sort();
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();

}
document.getElementById("show_array_div").onclick = function fun2(){
        for(let x2=0;x2<10;x2++)
            array1= array2;
            shwarray();
    }
    
function shwarray(){
    document.getElementById("show_array_div").innerHTML=array1;

}
document.getElementById("del_array").onclick=function(){
    if(array1.length!=0){
        array1=array3;
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();

}
// let test1= document.getElementById("show_array");
//     test1.onmouseover=function(){
//     window.alert('Hover')
// }


    // if(array1.length!=0)
    //     window.alert(array1);
    // else
    //     window.alert('Array is Empty!!!!!');


