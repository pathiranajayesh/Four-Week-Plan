//if, else if, else...
const time = new Date().getHours();
let greeting;
if(time<10){
  greeting = "Good Morning!";
}

else if(time<20){
  greeting = "Good Day!" ;
}

else{
  greeting = "Good Evening";
}

document.getElementById("greet").innerHTML=greeting;

//For Loop
let num = "";
for(let i=0;i<=10;i++){
  num+="Number "+i+"<br>";
}
document.getElementById("fLoop").innerHTML=num;

//While Loop
let num1="";
let i = 0;
while(i<=10){
  num1 += "Number "+i+"<br>";
  i++;
}
document.getElementById("wLoop").innerHTML=num1;

//DoWhile Loop
let num2="";
let x=0;
do{
  num2+="Number "+x+"<br>";
  x++;
} while(x<=10);
document.getElementById("dWloop").innerHTML=num2;

//functions

let value = testFunction(5,8);
document.getElementById("test").innerHTML = value;

  function testFunction(a,b){
    return a+b;
  }

//Sum Array

const y = [30, 40, 20, 60, 10];
let sum = 0;
for (let i = 0; i < y.length; i++) {
  sum += y[i];
}

document.getElementById("sumArray").innerHTML=sum;
