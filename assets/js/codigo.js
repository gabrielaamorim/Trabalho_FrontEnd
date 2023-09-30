var tam = 121
var isShowingBorder = true
var quadro = document.querySelector(".areaTrabalho");
for(let i = 0; i < tam; i++){
    let item = document.createElement("div");
    quadro.appendChild(item);
}

var quadrantes = quadro.children
var backgroundColor = "rgb(241, 236, 236)";
for(let item of quadrantes){
    item.addEventListener("click", () => {
        var color = document.getElementById("cor").value;
        if(item.style.backgroundColor != hexToRgb(color)) {
            item.style.backgroundColor = color;
        }
        else {
            item.style.backgroundColor=backgroundColor;
        }
    })
}
 //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }

function mostraGrid(){
    for(let item of quadrantes){
        if(isShowingBorder){
            item.style.border="0px";
        }
        else{
            item.style.border="1px solid white";
        }
    }
    isShowingBorder = !isShowingBorder;
}