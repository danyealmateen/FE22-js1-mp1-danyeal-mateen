let headerOne = document.createElement("h1");
let headerTwo = document.createElement("h2");
let headerThree = document.createElement("h3");
let headerFour = document.createElement("h4");
let headerFive = document.createElement("h5");

document.body.appendChild(headerFive);
document.body.appendChild(headerFour);
document.body.appendChild(headerThree);
document.body.appendChild(headerTwo);
document.body.appendChild(headerOne);

headerFive.innerText = "Rad1";
headerFour.innerText = "Rad2";
headerThree.innerText = "Rad3";
headerTwo.innerText = "Rad4";
headerOne.innerText = "Rad5";

headerOne.style.textAlign = "center";
headerOne.style.backgroundColor = "lightblue";
headerTwo.style.textAlign = "center";
headerTwo.style.backgroundColor = "lightblue";
headerThree.style.textAlign = "center";
headerThree.style.backgroundColor = "lightblue";
headerFour.style.textAlign = "center";
headerFour.style.backgroundColor = "lightblue";
headerFive.style.textAlign = "center";
headerFive.style.backgroundColor = "lightBlue";

for (let i = 0; i < 10; i++) {
  let numberDiv = document.createElement("div");
  document.body.appendChild(numberDiv);
  numberDiv.innerText += i;
  numberDiv.style.position = 'relative';
  numberDiv.style.left = '25rem'
  numberDiv.style.top = '1.4rem'
  console.log(i);

  if (i % 2 === 0) {
    numberDiv.style.backgroundColor = "black";
    numberDiv.style.color = "white";
    numberDiv.style.width = "50px";
  }
}

for (let j = 10; j >= 0; j--) {
  let divvy = document.createElement("div");
  document.body.appendChild(divvy);
  divvy.style.position = 'relative';
  divvy.style.left = '30rem';
  divvy.style.bottom = '10rem';
  divvy.innerText += j;
  console.log(j);

  if (j % 2 === 0) {
    divvy.style.backgroundColor = "orange";
    divvy.style.color = "green";
    divvy.style.width = "50px";
  }
}

let myArray = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

myArray.forEach((element, i) => {
  let newDiv = document.createElement("div");
  newDiv.style.position = 'relative';
  newDiv.style.left = '35rem';
  newDiv.style.bottom = '22.2rem';
  document.body.appendChild(newDiv);
  newDiv.innerText += element;
  newDiv.style.backgroundColor = "red";
  newDiv.style.width = "50px";

  if (i % 2 === 0) {
    newDiv.style.backgroundColor = "teal";
  } else {
    newDiv.style.backgroundColor = "gold";
  }
});
