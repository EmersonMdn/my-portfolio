
/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header"); // Obtiene el elemento con el id "header"

  // Si la posición vertical de desplazamiento (this.scrollY) es mayor o igual a 50, se agrega la clase "scroll-header" al elemento header, de lo contrario, se elimina la clase "scroll-header"
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader); // Agrega un controlador de eventos de desplazamiento para llamar a la función "scrollHeader" cuando se produce el desplazamiento de la página

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll(".services__modal"); // Selecciona todos los elementos con la clase "services__modal" que representan las vistas modales
const modalBtns = document.querySelectorAll(".services__button"); // Selecciona todos los elementos con la clase "services__button" que representan los botones de apertura de las vistas modales
const modalClose = document.querySelectorAll(".services__modal-close"); // Selecciona todos los elementos con la clase "services__modal-close" que representan los botones de cierre de las vistas modales

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal"); // Agrega la clase "active-modal" a la vista modal correspondiente al índice "modalClick"
};

modalBtns.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    modal(i); // Llama a la función "modal" pasando el índice actual como argumento para mostrar la vista modal correspondiente
  });
});

modalClose.forEach((modalButton) => {
  modalButton.addEventListener("click", () => {
    modalViews.forEach((mv) => mv.classList.remove("active-modal")); // Recorre todas las vistas modales y elimina la clase "active-modal" para cerrarlas
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 400,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item"); // Selecciona todos los elementos con la clase "work__item"

function activeWork() {
  linkWork.forEach((link) => link.classList.remove("active-work")); // Elimina la clase "active-work" de todos los elementos con la clase "work__item"
  this.classList.add("active-work"); // Agrega la clase "active-work" al elemento en el que se hizo clic (referenciado por "this")
}

linkWork.forEach((link) => link.addEventListener("click", activeWork)); // Agrega un controlador de eventos de clic a cada elemento con la clase "work__item" para llamar a la función "activeWork" cuando se hace clic en ellos

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]"); // Selecciona todas las secciones que tienen un atributo "id"
const navLinks = document.querySelectorAll(".nav__menu a"); // Selecciona todos los enlaces de navegación dentro del menú

const scrollActive = () => {
  const scrollY = window.scrollY || window.pageYOffset; // Obtiene la posición vertical actual del desplazamiento en la página

  sections.forEach((current) => {
    // Itera sobre cada sección
    const sectionHeight = current.offsetHeight; // Obtiene la altura de la sección actual
    const sectionTop = current.offsetTop - 58; // Obtiene la posición vertical superior de la sección actual y resta 58 píxeles (posible compensación)
    const sectionId = current.getAttribute("id"); // Obtiene el valor del atributo "id" de la sección actual
    const navLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    ); // Busca el enlace de navegación correspondiente a la sección actual mediante un selector que coincide con el valor del atributo "href" que contiene el "sectionId"

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link"); // Agrega la clase "active-link" al enlace de navegación si la posición de desplazamiento está dentro de los límites de la sección actual
    } else {
      navLink.classList.remove("active-link"); // Elimina la clase "active-link" del enlace de navegación si la posición de desplazamiento está fuera de los límites de la sección actual
    }
  });
};

window.addEventListener("scroll", scrollActive); // Agrega un controlador de eventos de desplazamiento para llamar a la función "scrollActive" cuando se produce el desplazamiento de la página

/*=============== LIGHT DARK THEME ===============*/

const themeButton = document.getElementById("theme-button"); // Obtiene el elemento del botón de tema por su id
const lightTheme = "light-theme"; // Clase CSS para el tema claro
const iconTheme = "bx-sun"; // Clase CSS para el ícono del sol

// Obtiene el tema e icono seleccionado almacenado en el almacenamiento local
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Funciones para obtener el tema y el ícono actual según las clases CSS aplicadas a los elementos
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// Si hay un tema y un ícono seleccionado almacenado, se aplica al cargar la página
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Agrega un controlador de eventos de clic al botón de tema
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme); // Alterna la clase del tema claro en el elemento body
  themeButton.classList.toggle(iconTheme); // Alterna la clase del ícono del botón de tema

  // Almacena el tema y el ícono seleccionados en el almacenamiento local
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home__data");
sr.reveal(".home__handle", { delay: 700 });
sr.reveal(".home__social, .home__scroll, .footer", {
  delay: 900,
  origin: "bottom",
  reset: false,
});

sr.reveal(".about, .skills, .services, .work, .testimonial, .contact", {
  delay: 200,
  origin: "bottom",
});

/*===================== SEND MESSAGE===========================*/

const button = document.getElementById("send-message");

button.onclick = (e) => {
  e.preventDefault();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Mensaje enviado!",
    showConfirmButton: false,
    timer: 1500,
  });
};

