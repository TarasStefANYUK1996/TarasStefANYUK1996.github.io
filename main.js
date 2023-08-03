const btn = $(".js-header");
function toggleMenu() {
  btn.toggleClass("_active");
  $("body").toggleClass("lock");
}
function toggleLabel(e) {
  const input = document.getElementById(e.target.id);
  const label = e.target.closest(".form-group").querySelector(".label-js");

  if (input.value.trim() !== "") {
    label.style.opacity = "0";
  } else {
    label.style.opacity = "1";
  }
}
const labelAll = document.querySelectorAll(".label-js");
const addIn = () => {
  labelAll.forEach((label) => {
    let input = document.querySelector("#email");

    if (input.value.trim() !== "") {
      label.style.opacity = "0";
    } else {
      label.style.opacity = "1";
    }
  });
};

$(document).ready(function () {
  addIn();
  let inputElements = document.querySelectorAll("input.required");
  const textAr = document.querySelector("#message");
  inputElements = Array.from(inputElements);
  inputElements.push(textAr);

  // Додаємо обробник події "input" до кожного знайденого елемента
  inputElements.forEach(function (element) {
    element.addEventListener("input", function (e) {
      toggleLabel(e);
    });
  });

  $('a[href^="#"]').bind("click", function (e) {
    let anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 100,
        },
        800
      );

    btn.removeClass("_active");

    $("body").removeClass("lock");
    e.preventDefault();
  });
  let $currentSlide = $(".current-slide");
  let $totalSlides = $(".total-slides");
  let $gallery__img = $(".js-slick-initialization");
  let $prevButton = $(".arrow__left");
  let $nextButton = $(".arrow__right");

  $gallery__img.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      let slideCount = slick.slideCount;
      let activeSlide = (currentSlide ? currentSlide : 0) + 1;
      if (activeSlide < 10) {
        activeSlide = "0" + activeSlide;
      }
      if (slideCount < 10) {
        slideCount = "0" + slideCount;
      }

      $currentSlide.text(activeSlide);

      $totalSlides.text(slideCount);
      if (currentSlide === 0) {
        $prevButton.addClass("last-slide");
      } else {
        $prevButton.removeClass("last-slide");
      }
      if (currentSlide === slideCount - 1) {
        $nextButton.addClass("last-slide");
      } else {
        $nextButton.removeClass("last-slide");
      }
    }
  );

  $(".js-slick-initialization").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: $(".arrow__left"),
    nextArrow: $(".arrow__right"),
    infinite: false,
  });
});
