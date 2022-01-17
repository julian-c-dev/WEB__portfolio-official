// & [NavBar] TOGGLE btwn Theme dark/light

const stwch_Theme = document.querySelector("#handlerTheme");
const stwch_ThemeHidden = document.querySelector("#handlerThemeHidden");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const body = document.getElementsByClassName("dark-theme");
const iconBulb = document.querySelector(".fa-lightbulb");
const elementsHlgt = document.getElementsByClassName("hlgt");
const logo = document.getElementById("logo");

let colorTheme = true;

stwch_Theme.addEventListener("click", themeEventDesktop);
stwch_ThemeHidden.addEventListener("click", themeEventMobile);

function themeEventDesktop() {
  if (stwch_Theme.checked) {
    stwch_ThemeHidden.checked = true;
  } else {
    stwch_ThemeHidden.checked = false;
  }
}

function themeEventMobile() {
  if (stwch_ThemeHidden.checked) {
    stwch_Theme.checked = true;
  } else {
    stwch_Theme.checked = false;
  }
}

checkboxes.forEach((element) => element.addEventListener("click", toggleTheme));

function toggleTheme() {
  if (colorTheme === true) {
    document.body.className = document.body.className.replace(
      "dark-theme",
      "light-theme"
    );
    colorTheme = false;
    toggleBulbs();
    toggleHlgt();
    toggleLogo();
  } else {
    document.body.className = document.body.className.replace(
      "light-theme",
      "dark-theme"
    );
    colorTheme = true;
    toggleBulbs();
    toggleHlgt();
    toggleLogo();
  }
}

function toggleBulbs() {
  if (colorTheme) {
    iconBulb.classList.remove("fas");
    iconBulb.classList.add("far");
  } else {
    iconBulb.classList.remove("far");
    iconBulb.classList.add("fas");
  }
}

function toggleHlgt() {
  if (colorTheme) {
    for (let i = 0; i < elementsHlgt.length; i++) {
      elementsHlgt[i].classList.remove("hlgt-light");
    }
  }
  if (!colorTheme) {
    for (let i = 0; i < elementsHlgt.length; i++) {
      elementsHlgt[i].classList.add("hlgt-light");
    }
  }
}

function toggleLogo() {
  if (colorTheme) {
    logo.src = "/images/logo-acc.svg";
  }
  if (!colorTheme) {
    logo.src = "/images/logo.svg";
  }
}

// & [Skill Section] Slider

let slideIndex = 2;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide-circle");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" transparent", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " transparent";
}

// & [Experience Section] REMOVE CLASSES after 1250px (normal => slider cards)
const swiper1 = document.querySelector(".swiper1");
const swiper2 = document.querySelector(".swiper2");
const swiper3 = document.querySelector(".swiper3");
const swiper4 = document.querySelector(".swiper4");
let swiper = null;

window.onload = function () {
  if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
    swiper1.classList.remove("job-swiper-frame");
    swiper2.classList.remove("swiper");
    swiper2.classList.remove("mySwiper");
    swiper3.classList.remove("swiper-wrapper");
    swiper4.classList.remove("swiper-slide");
    swiper = null;
  } else {
    swiper1.classList.add("job-swiper-frame");
    swiper2.classList.add("swiper");
    swiper2.classList.add("mySwiper");
    swiper3.classList.add("swiper-wrapper");
    swiper4.classList.add("swiper-slide");

    swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 100,
        depth: 800,
        modifier: 1,
        slideShadows: false,
      },
    });
  }
};

window.addEventListener("resize", onResizeFunction);
function onResizeFunction() {
  if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
    swiper1.classList.remove("job-swiper-frame");
    swiper2.classList.remove("swiper");
    swiper2.classList.remove("mySwiper");
    swiper3.classList.remove("swiper-wrapper");
    swiper4.classList.remove("swiper-slide");
    swiper = null;
  } else {
    swiper1.classList.add("job-swiper-frame");
    swiper2.classList.add("swiper");
    swiper2.classList.add("mySwiper");
    swiper3.classList.add("swiper-wrapper");
    swiper4.classList.add("swiper-slide");
    swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 100,
        depth: 800,
        modifier: 1,
        slideShadows: false,
      },
    });
  }
}
