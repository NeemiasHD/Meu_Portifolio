var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false, //
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//menu 3 listras
let listrinhas = document.querySelector('.listrinhas');
listrinhas.onclick = function(){
  let listras = document.querySelector('.listras');
  listras.style.width = "100%";
  let blur = document.querySelector('.blur');
  blur.style.opacity = "1";
}

let sairlistinhas = document.querySelector('.sairlistinhas');
let SairML = document.querySelector('.SairML');
let SairML2 = document.querySelector('.SairML2');
let SairML3 = document.querySelector('.SairML3');

let sair_do_menulateral = function () {
    let listras = document.querySelector('.listras');
    listras.style.width = "0px";
    let blur = document.querySelector(".blur");
    blur.style.opacity = "0";
};
sairlistinhas.onclick = sair_do_menulateral;
SairML.onclick = sair_do_menulateral;
SairML2.onclick = sair_do_menulateral;
SairML3.onclick = sair_do_menulateral;


//MUDAR DE COR

let cor1 = document.querySelector(".cor1");
let cor2 = document.querySelector(".cor2");
let cor3 = document.querySelector(".cor3");
let cor4 = document.querySelector(".cor4");
cor1.onclick = function () {
  let root = document.documentElement;
  root.style.setProperty("--corMain", "#FFDE00");
  changeimage(1);
};
cor2.onclick = function () {
  let root = document.documentElement;
  root.style.setProperty("--corMain", "#FF597B");
  changeimage(2);
};

cor3.onclick = function () {
  let root = document.documentElement;
  root.style.setProperty("--corMain", "#34B3F1");
  changeimage(3);
};

cor4.onclick = function () {
  let root = document.documentElement;
  root.style.setProperty("--corMain", "white");

  //mudando cores dos icones das habilidades para melhor compatibilidade.
  let adobeLogo = document.querySelector(".bx.bxl-adobe");
  adobeLogo.style.color = "black";

  let htmlLogo = document.querySelector(".bx.bxl-html5");
  htmlLogo.style.color = "black";
  let cssLogo = document.querySelector(".bx.bxl-css3");
  cssLogo.style.color = "black";

  let criatividadeLogo = document.querySelector(".bx.bxs-edit");
  criatividadeLogo.style.color = "black";

  changeimage(4);
};



//botão de voltar

const goToTop = document.querySelector(".up");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 150) {
    goToTop.style.bottom = "0px";
    goToTop.style.opacity = "1";
  } else {
    goToTop.style.bottom = "-200px";
  }
}
goToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};




//scroll reveal

ScrollReveal({ reset: true }); // configuração padrão pra iniciar essa biblioteca
ScrollReveal({
  distance: "70px",
}); /*é preciso dessa propriedade para a origin funcionar*/

ScrollReveal().reveal(".hab", {
  origin: "bottom",
  interval: 200, // é para ter intervalo de cada habilidade
  duration: 1000,
}); // duração de 1 minuto

var contato = ScrollReveal({ distance: "0px" }); // criando uma variavel contato para não bugar o site

contato.reveal("#main4 h1", {
  scale: 0.5,
  interval: 200,
  duration: 1000,
});

contato.reveal(".mensagem_contato", {
  scale: 0.85,
  interval: 200,
  duration: 1000,
});

contato.reveal(".iconeAnimated", {
  scale: 0.85,
  interval: 200,
  duration: 1000,
});
contato.reveal("#main4 p", {
  scale: 0.85,
  interval: 200,
  duration: 1000,
});
