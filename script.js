let navOpen = false;

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 0.8,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });

}

function navAnimation() {
  var button = document.querySelector(".hamburger");
  var navItems = document.querySelector(".bottom-nav-items");

  var openFunction = function () {
    navItems.style.display = "grid";
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  };
  var closeFunction = function () {
    navItems.style.display = "none";
    let tl = gsap.timeline();
    
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  };

  button.addEventListener("click", function () {
    if (!navOpen) {
      openFunction();
      navOpen = true;
    } else {
      closeFunction();
      navOpen = false;
    }
  });

  window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 1100 && navOpen){
      closeFunction();
      navOpen = false;
    }
  });
}

function page3VideAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.load();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function page6ScrollTrigger() {
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}

loadingAnimation();
navAnimation();
page3VideAnimation();
page6ScrollTrigger();
