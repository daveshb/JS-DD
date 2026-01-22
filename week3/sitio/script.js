console.log("si sirve");

const title = document.getElementById("title");
const btn = document.getElementById("btn");
const btnR = document.getElementById("btnR");

const container = document.getElementById("list");

const titleH2 = document.getElementsByTagName("h2");


const card1 = document.getElementById("card-1");
const buttonBlue = document.getElementById("buttonBlue");
const buttonRemove = document.getElementById("buttonBlueR");




buttonBlue.addEventListener("click", ()=>{
    console.log("clic blue")
    card1.classList.add("card-blue")
})

buttonRemove.addEventListener("click", ()=>{
    card1.classList.remove("card-blue")
})













btn.addEventListener("click", () => {
    btnR.style.backgroundColor = "blue";
    btnR.style.color = "green"
    title.style.color = "green"
    title.style.fontSize = "60px"
  // console.log("Hola")
  // console.log(title)
  // title[0].textContent = "Se cambio el title"
  // title[1].textContent = "se cambio el segundo"
  //   titleH2.setAttribute("id", "el-H2");
  //   btnR.setAttribute("id","contenido");
  //   console.log(titleH2);
  //   titleH2[0].textContent = "cambio";
  //   container.innerHTML =
  //     "<ul> <li>manzana</li> <li>pera</li> <li>mora</li> </ul>";
});

btnR.addEventListener("click", () => {
  container.outerHTML = "<div> aqui estaba la lista</div>";
});
