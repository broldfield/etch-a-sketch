const body = document.querySelector("body");
const btn = document.querySelector("#btn");

const createGrid = (number) => {
  //Loop 16 times, creating a Vertical Div.
  for (let i = 1; i <= number; i++) {
    let vertDiv = document.createElement("div");
    vertDiv.id = `vertDiv${i}`;
    vertDiv.classList.add("vertDiv");
    body.appendChild(vertDiv);

    //In each Vertical Div, add 16 Horizontal Divs.
    for (let j = 1; j <= number; j++) {
      let horiDiv = document.createElement("div");
      horiDiv.id = `horiDiv${j}`;
      horiDiv.classList.add("horiDiv");
      vertDiv.appendChild(horiDiv);
    }
  }

  //Init mouseover event listener
  divListen();
};

const resetGrid = () => {
  const lDivs = document.querySelectorAll(".vertDiv");

  lDivs.forEach((div) => {
    div.remove();
  });
};

const divListen = () => {
  const hDivs = document.querySelectorAll(".horiDiv");

  hDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("hovered");
    });
  });
};

const promptUser = () => {
  while (true) {
    let choice = prompt("Enter a number below 100 to generate grid.");

    if (choice == null) {
      alert("Must enter a number between 1-100");
    } else if (isNaN(choice)) {
      alert("Must enter a number between 1-100");
    } else if (parseInt(choice) < 1 || parseInt(choice) > 100) {
      alert("Must enter a number between 1-100");
    } else {
      return parseInt(choice);
    }
  }
};

//Create a Default grid on load
createGrid(16);

//
btn.addEventListener("click", () => {
  resetGrid();
  createGrid(promptUser());
});
