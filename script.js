
const buttons = document.querySelectorAll("button:not([type='diff'])");
const h2 = document.getElementById("declare");
const emeiyyat=document.getElementById('emeliyyat')
const tarix = document.getElementById("tarix");
const memory = document.getElementById("memory");


buttons.forEach((a) => {
  a.addEventListener("click", () => {
  
    h2.value += a.innerText
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  h2.value = "";
});

clear.addEventListener("dblclick", () => {
  tarix.innerHTML = "";
h2.value = "";
});





const delet = document.getElementById("delete");
delet.addEventListener("click", () => {
  h2.value = h2.value.slice(0, -1);
});

document.getElementById("equal").onclick = hesabla;

function hesabla() {
  h2.value = `${eval(h2.value)} `;
  tarix.innerHTML += `
  <li id="memory"> ${eval(h2.value)} </li>
 `;
  
}



let bool = false;
const brunch = document.getElementById("brunch");
brunch.addEventListener("click", () => {
bool==true ?  h2.value += ")":h2.value += "("
  bool = !bool;
});

const pm = document.getElementsByClassName("pm")[0];

pm.addEventListener("click", () => {
  bool==true ?  h2.value += "":h2.value += "(-"
  bool = !bool;
})

