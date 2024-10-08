const display = document.getElementById("display");

function append(input){
    if(display.value == "Error" || display.value == "Infinity" || display.value == "undefined" || display.value == '0' || display.value == "NaN")  {
    display.value = input;
    }
    else{
        display.value += input;
    }

    
}
    
function erase(){
    display.value = display.value.toString().slice(0,-1);
}



function eraseall(){
    display.value ="";
}

function result(){
    try{
    display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";


    }
}
