//button auswählen und EventListener drauflegen:
document
    .querySelector("#changeColor")
    .addEventListener("click", changeColor);

function changeColor(event) {
    console.log(event.target);

    //berechne Zufallswerte für unsere nächste Farbe:
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);

    //wähle das div-Element aus und ändere seine Hintergrundfarbe:
    const colorBox = document.querySelector("#color-box");
    colorBox.style.backgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`;
    colorBox.style.backgroundColor = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";

    // wähle das p-Element aus und schreibe den Farbwert als textContent/innerHTML/innerText
    const colorCode = document.querySelector("#color-code");
    colorCode.innerHTML = `hsl(${hue},${saturation}%,${lightness}%)`;
    if (lightness < 50) {
        colorCode.style.color = "white";
    }
    else {
        colorCode.style.color = "black";
    }

    // if (document.querySelector("#color-code")) {
    //     document.querySelector("#color-code").remove();
    // }

    // const p = document.createElement("p");
    // p.innerHTML = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
    // p.id = "color-code";
    // colorBox.appendChild(p);


}

