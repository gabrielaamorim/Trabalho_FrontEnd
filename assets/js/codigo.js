var quadro = document.querySelector(".areaTrabalho");
var quadrantes = quadro.children
for(let item of quadrantes){
    item.addEventListener("click", () => {item.style.backgroundColor="red"})
}
console.log(quadro);