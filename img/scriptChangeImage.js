function changeimage(numero) {
  let tablet = document.querySelector(".tablet");
  let tablet2 = document.querySelector(".tablet2");
  let tablet3 = document.querySelector(".tablet3");
  let tablet4 = document.querySelector(".tablet4");
  if (numero == 1) {
    tablet.style.opacity = "1";
    tablet2.style.opacity = "0";
    tablet3.style.opacity = "0";
    tablet4.style.opacity = "0";
  }

  if (numero == 2) {
    tablet.style.opacity = "0";
    tablet2.style.opacity = "1";
    tablet3.style.opacity = "0";
    tablet4.style.opacity = "0";
  }

  if (numero == 3) {
    tablet.style.opacity = "0";
    tablet2.style.opacity = "0";
    tablet3.style.opacity = "1";
    tablet4.style.opacity = "0";
  }

  if (numero == 4) {
    tablet.style.opacity = "0";
    tablet2.style.opacity = "0";
    tablet3.style.opacity = "0";
    tablet4.style.opacity = "1";
  }
}
