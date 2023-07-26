function toggleMenu() {
  const btn = document.querySelector(".header");
  btn.classList.toggle("_active");
  $("body").toggleClass("lock");
}

$(document).ready(function () {
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
    const btn = document.querySelector(".header");
    btn.classList.remove("_active");

    $("body").removeClass("lock");
    e.preventDefault();
  });
  return false;
});
$(document).ready(function () {
  let $currentSlide = $(".current-slide");
  let $totalSlides = $(".total-slides");
  var $gallery__img = $(".gallery__img");
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

  $(".gallery__img").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: $(".arrow__left"),
    nextArrow: $(".arrow__right"),
    infinite: false,
  });
});
