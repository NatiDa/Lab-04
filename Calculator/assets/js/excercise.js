let array = new Array();




function add(array){
    sum=0
    for(let i=0;i<array.length;i++){
        sum=sum+parseInt(array[i])
    }
    return sum
    
}
function sub(a,b){
    return a-b
    
}
function div(a,b){
    return a/b
    
}

function mul(array){
    sum=1
    for(let i=0;i<array.length;i++){
        sum=sum*parseInt(array[i])
    }
    return sum
    
}
(function(){
    console.log("1 for addition")
    console.log("2 for subtraction")
    console.log("3 for division")
    console.log("4 for multiplication")

    choice = prompt("Enter your choice")

    if(choice==1){

        arraySize = prompt("how many numbers do you want to input?")
        for (let i=0;i<arraySize;i++){
            array[i]=prompt("enter numbers")
        }
        console.log(add(array))
    }
    if(choice==2){
        a=prompt("Enter first number")
        b=prompt("Enter second number")
        console.log(sub(a,b))
    }
    if(choice==3){
        a=prompt("Enter numerator")
        b=prompt("Enter denominator")
        if(b==0){console.log("denominator can not be zero")}
        else{ console.log(div(a,b))}
       
    }
    if(choice==4){
        arraySize = prompt("how many numbers do you want to input?")
        for (let i=0;i<arraySize;i++){
            array[i]=prompt("enter numbers")
        }
        console.log(mul(array))
    }
})();
