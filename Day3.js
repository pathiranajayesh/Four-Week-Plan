//console.log
let Mango=10;
let Orange=15;

console.log("I have "+(Mango+Orange)+" fruits in my bag");

var vehicle = "Car";
console.log(vehicle);

//if else with console.log
const z = 60;
if(z>30){
  console.log("z is greater than 30.");
}
else{
  console.log("z=60");
};

//Objects with console log

const Guitar = {Type:"Semi-Acoustic", Brand:"Takamine",Model:"12 String"}; 

console.log("My Favourite Guitar is "+ Guitar.Brand +" "+Guitar.Model+" "+Guitar.Type +" Guitar.");



//Arrays with console.log
const fruits =["Apple","Orange","Mango"];
console.log(fruits);

var food = new Array();

food [0] = "Pizza";
food [1] = "Bread";
food [2] = "Rice";

console.log(food);


var routine = ["Good Morning","Take a wash","Coffee Time","Breakfast","Go to Work","Back to home","Go to Gym","Dinner"];

routine.push("Good Night");// If pushed it will adding to end of the array.
console.log(routine);

routine.splice(2,1);
console.log(routine); //From this can remove 1 value or any value from the 2ns value.

routine.splice(2,2,"Go to Park");
console.log(routine); //From this I removed 2 values from 2nd value and added a new valu to the same place.









