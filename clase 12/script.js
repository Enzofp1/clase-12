function saludo() {
  let nombre = prompt("Ingrese su  nombre! ");
  if (nombre === "" || nombre === null) {
    alert("Ingrese su nombre! ");
    saludo();
  } 
  else {
    alert(`Bienvenido! ${nombre}`);
  }
}
saludo();

