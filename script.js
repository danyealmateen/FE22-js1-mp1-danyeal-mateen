for (let i = 0; i < 6; i++) {
  let generatedDiv = document.createElement("div");
  document.body.appendChild(generatedDiv);
  generatedDiv.innerText = "Rad" + i;
  generatedDiv.style.textAlign = "center";
  generatedDiv.style.fontSize = `${i * 5}px`;
  generatedDiv.style.margin = "10px";
  generatedDiv.style.backgroundColor = `hsla(${i}191, 63%, 50%)`;
}

let divContainerOne = document.createElement("div");
document.body.appendChild(divContainerOne);
divContainerOne.style.margin = "10px";
divContainerOne.style.height = "200px";
divContainerOne.style.width = "75px";
divContainerOne.style.backgroundColor = "purple";
divContainerOne.style.padding = "15px";

for (let i = 0; i < 10; i++) {
  let para = document.createElement("p");
  divContainerOne.append(para);
  para.style.margin = "0";
  para.append(i);

  if (i % 2 === 0) {
    para.style.backgroundColor = "black";
    para.style.color = "white";
  } else {
    para.style.backgroundColor = "white";
    para.style.color = "black";
  }

  if (i === 4) {
    para.style.backgroundColor = "transparent";
  }
}

let divContainerTwo = document.createElement("div");
document.body.appendChild(divContainerTwo);
divContainerTwo.style.margin = "10px";
divContainerTwo.style.height = "200px";
divContainerTwo.style.width = "75px";
divContainerTwo.style.backgroundColor = "purple";
divContainerTwo.style.padding = "15px";

for (let i = 9; i >= 0; i--) {
  let paraTwo = document.createElement("p");
  divContainerTwo.append(paraTwo);
  paraTwo.style.margin = "0";
  paraTwo.append(i);

  if (i % 2 === 0) {
    paraTwo.style.backgroundColor = "black";
    paraTwo.style.color = "white";
  } else {
    paraTwo.style.backgroundColor = "white";
    paraTwo.style.color = "black";
  }

  if (i === 8) {
    paraTwo.style.backgroundColor = "transparent";
  }
}

let theOneAndOnlyArray = [
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

let divContainerThree = document.createElement("div");
document.body.appendChild(divContainerThree);
divContainerThree.style.margin = "10px";
divContainerThree.style.height = "200px";
divContainerThree.style.width = "70px";
divContainerThree.style.backgroundColor = "purple";
divContainerThree.style.padding = "15px";

theOneAndOnlyArray.forEach((arrayElement, i) => {
  let paraThree = document.createElement("p");
  divContainerThree.append(paraThree);
  paraThree.append(arrayElement);
  paraThree.style.margin = "0px";

  if (i % 2 === 0) {
    paraThree.style.backgroundColor = "black";
    paraThree.style.color = "white";
  } else {
    paraThree.style.backgroundColor = "white";
    paraThree.style.color = "black";
  }

  if (arrayElement === "sex") {
    paraThree.style.backgroundColor = "transparent";
  }
});

let theMasterOfAllDivs = document.createElement("div");
document.body.appendChild(theMasterOfAllDivs);
theMasterOfAllDivs.append(divContainerOne, divContainerTwo, divContainerThree);
theMasterOfAllDivs.style.display = "flex";
theMasterOfAllDivs.style.alignItems = "center";
theMasterOfAllDivs.style.justifyContent = "center";
theMasterOfAllDivs.style.height = "500px";
theMasterOfAllDivs.style.width = "500px";
console.log(theMasterOfAllDivs);
