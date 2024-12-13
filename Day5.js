//getElementById
const headingChange = document.getElementById("heading");
headingChange.textContent = "Maldives";
headingChange.style.color = "red";
headingChange.style.fontFamily = "alrial";

//getElementByClassName
const sectionChange = document.getElementsByClassName("section");
sectionChange[0].textContent = "The Maldives, an archipelagic nation located in the Indian Ocean, is known for its stunning natural beauty, crystal-clear waters, and unique geography. Comprised of over 1,000 coral islands, the Maldives is one of the world’s most sought-after tourist destinations. The country’s tropical climate, along with its vibrant coral reefs and diverse marine life, makes it a paradise for vacationers, divers, and nature enthusiasts alike.";

sectionChange[1].textContent = "The Maldives is divided into several administrative districts that manage the governance and development of the islands. These districts play a vital role in maintaining the balance between preserving the natural environment and fostering the nation’s growing economy, which is heavily reliant on tourism.The capital city, Malé, is the heart of the country, housing the government and most of the nation’s population. Apart from Malé, the country has several other districts, each with its own distinct characteristics and communities."

sectionChange[2].textContent ="The Maldives is not only a paradise for tourists but also a model of environmental sustainability, with the government and local communities working towards preserving its unique ecosystems for future generations." 

for(let i=0; i<sectionChange.length;i++){
  sectionChange[i].style.color="green";
  sectionChange[i].style.fontSize="20px";
}


//getElementByTagName
// const imgarea=document.getElementById("imgarea");
// const img = imgarea.getElementsByTagName("img");

// for(let i=0; i=img.length; i++){
//   img[i].style.objectFit = "cover";
//   img[i].style.width="100px";
// }

//quesrySelector
const bodyChange = document.querySelector("body");
bodyChange.style.backgroundColor="grey";

const districts = document.querySelector(".districts");

districts.innerHTML+="<li>NEW DISTRIC 1</li><li>NEW DISTRIC2</li>"

