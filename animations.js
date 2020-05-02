function fadeOut() {
    gsap.to(".myBtn",2, {
      y: "-100%",
      opacity: 0,
    });

    gsap.to(".screen",2, {
      y: "-400%",
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 1,
    });

    gsap.from(".overlay",2, {
      ease: Power2.easeInOut,
    });
    gsap.to(".overlay",2, {
      delay: 1,
      top: "-110%",
      ease: Expo.easeInOut,
    });

    gsap.to(".overlay-2",2, {
      delay: 1.5,
      top: "-110%",
      ease: Expo.easeInOut,
    });

    gsap.from(".content",2, {
      delay: 2,
      opacity: 0,
      ease: Power2.easeInOut,
    });
    gsap.to(".content",2, {
      opacity: 1,
      y: "-20px",
      delay: 2,
      ease: Power2.easeInOut,
    });
    gsap.from(".img-container",2, {
      delay: 2,
      opacity: 0,
      ease: Power2.easeInOut,
    });
    gsap.to(".img-container",2, {
      opacity: 1,
      y: "-20px",
      delay: 2,
      ease: Power2.easeInOut,
    });
    gsap.from(".row-wrap",2, {
      delay: 2,
      opacity: 0,
      ease: Power2.easeInOut,
    });
    gsap.to(".row-wrap",2, {
      opacity: 1,
      y: "50%",
      delay: 2,
      ease: Power2.easeInOut,
    });
  }

  var myAnimation = new hoverEffect({
    parent: document.querySelector(".img"),
    intensity: 0.4,
    image1: "assests/img5.jpg",
    image2: "assests/img6.jpg",
    displacementImage: "assests/4.png",
  });

  var textWrapper = document.querySelector(".hero-title");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  $(document).ready(function () {
    $(".img").hover(
      function () {
        anime.timeline({ loop: false }).add({
          targets: ".hero-title .letter",
          translateX: [90, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 100 + 40 * i,
        });
      },

      function () {
        anime.timeline({ loop: false }).add({
          targets: ".hero-title .letter",
          translateX: [0, -80],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 800,
          delay: (el, i) => 40 * i,
        });
      }
    );
  });
