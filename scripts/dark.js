let back = document.querySelector(".wrapper");
let light = document.getElementById("light");
light.addEventListener("click", () => {
back.setAttribute("style", "background-color:white;");
});

let def = document.getElementById("default");
def.addEventListener("click", () => {
back.removeAttribute("style");
});
let dark = document.getElementById("dark");
dark.addEventListener("click", () => {
back.setAttribute("style", "background-color: rgb(48, 48, 48);");
});
