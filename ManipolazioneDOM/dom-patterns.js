function showPattern() {
  const colorsArr = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let topPosition = 25;
  let leftPosition = 25;

  let width = 500;
  let heigth = 500;

  while (width > 50) {
    const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
    const newDiv = document.createElement("div");

    newDiv.style.top = topPosition + "px";
    newDiv.style.left = leftPosition + "px";
    newDiv.style.width = width + "px";
    newDiv.style.height = heigth + "px";
    newDiv.style.background = colorsArr[randomColorIdx];

    newDiv.style.borderRadius = 250 + "px";

    document.body.appendChild(newDiv);

    topPosition += 10;
    leftPosition += 10;
    width -= 20;
    heigth -= 20;
  }
}
