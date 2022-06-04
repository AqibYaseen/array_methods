
let array1= [];
let array2= [8,4,6,8,2,1,3,4,5,8,6,4,8,9,7,5,3,0]

// Inserts value in front of array using unshift(); method

document.getElementById("insert_before").onclick=()=>{
    let valInsertBef = window.prompt('Enter Value to insert in Front of Array :');
    if(isNaN(valInsertBef)){
        alert("Enter a valid number")
    }else{
        array1.unshift(parseInt(valInsertBef));    
        shwarray();
    }
}

// Inserts value at END of array using push(); method

document.getElementById("insert_after").onclick=()=>{
    let valInsertaft = window.prompt('Enter Value to insert at Back of Array :');
    let x = parseInt(valInsertaft);
    if(isNaN(x)) {
        alert("Enter a valid number")
    }else{
        array1.push(x);
        shwarray();
    } 
}

// Removes element from front of array using shift(); method

document.getElementById("rm_before").onclick=()=>{
    if(array1.length!=0){
        array1.shift();
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();
}

// Removes element from back of array using pop(); method

document.getElementById("rm_after").onclick=()=>{
    if(array1.length!=0){
        array1.pop();
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();
}

// Sorts elements in array in accending order using sort(); method

document.getElementById("show_array").onclick=()=>{
    if(array1.length!=0){
        array1.sort((a,b)=>a-b);
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();

}

// Inserts value in array at any given index using splice(); method

document.getElementById("add_at").onclick=()=>{
    if(array1.length!=0){
        let userInput=window.prompt("Enter index at which you want to add :");
        let userInputValue=window.prompt("Enter index at which you want to add :");

        array1.splice(userInput,0,parseInt(userInputValue));
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();

}

// Removes value from array at any given index using splice(); method

document.getElementById("rm_at").onclick=()=>{
    if(array1.length!=0){
        let indexToRemFrom=window.prompt("Enter index at which you want to remove items :");
        let numOfItems=window.prompt("Enter the number of items to remove :");

        array1.splice(indexToRemFrom,numOfItems);
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();

}

// Reverses elements of array using reverse(); method

document.getElementById("rev_array").onclick=()=>{
    if(array1.length!=0){
        array1.reverse();
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();

}

// Adds (+ increment) a value to each element of array by traversing the array using forEach(); method

document.getElementById("add_to").onclick = ()=>{
    let userInput = window.prompt('Eneter value to add to each element: ');
    array1.forEach(arrayFun);
    function arrayFun(val,index){
        array1[index] = val+1;
    }
    shwarray();
}

// Displays the value of static array inside of div 

document.getElementById("show_array_div").onclick = ()=>{    
            array1 = array2;
            shwarray();
}    

// Deletes array using splice(); method "splice(index[0],items to delete = array1.length);" => deletes from 0 index the array.length elements i.e. all elements

document.getElementById("del_array").onclick=()=>{
    if(array1.length!=0){
        array1.splice(0,array1.length);
        shwarray();
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();
}
// Sum of elements using reduce(); method

document.getElementById("sum_elements").onclick=()=>{
    if(array1.length!=0){
        let result = array1.reduce(p,v=> p=p+v);
        return result;

        shwarray(result);
    }else
        window.alert('Array is Empty!!!!!');
        shwarray();
}
// Show the current value of array inside the div using innerHTML component
function shwarray(p){
    
    if(p>0){
    document.getElementById("show_array_div").innerHTML=p;

    }else{
        document.getElementById("show_array_div").innerHTML=array1;
    }
}   