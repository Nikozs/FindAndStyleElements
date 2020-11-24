const lista = document.getElementsByTagName("li");
const x = document.querySelectorAll("li");

for (let i = 0; i < lista.length; i++) {
  if (lista[i].textContent == "Strawberry") {
    console.log("I found the " + lista[i].id + ": " + lista[i].innerHTML);
    document.getElementById(lista[i].id).style.background = "red";
  }

  if (lista[i].textContent == "Orange") {
    console.log("I found the fruit" + ": " + lista[i].innerHTML);
    document.querySelector("li[data-foodtype='squishy']").style.background = "orange";
  }
}
console.log(lista);

console.log("Using for loop here:");
for (let i = 0; i < lista.length; i++) {
  if (lista[i].textContent == "Pear") {
    lista[i].style.background = "green";
  }
  lista[i].style.width = "100px";
  lista[i].style.listStyle = "none";
  console.log(lista[i].innerHTML);
}

console.log(x);

console.log("Using forEach here:");
x.forEach((element) => {
  console.log(element.innerHTML);
  element.style.border = "solid";
  element.style.borderWidth = "1px";
});
