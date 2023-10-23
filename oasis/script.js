var t1 = gsap.timeline();

t1.from(".nav,.logo", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});

t1.from(".h-text h1, #btn", {
  x: -100,
  opacity: 0,
  stagger: 0.3,
});

t1.from(" h5", {
  scale: 0,
  opacity: 0,
});

t1.to(" h5", {
  y: 30,
  repeat: -1,
  duration: 1,
  yoyo: true,
});

t1.to(".about section", {
  scrollTrigger: {
    trigger: ".about section",
    scroller: "body",
    start: "top 80%",
    scrub: true,
  },

  transform: "scale(1.2)",
});

t1.from(".web", {
  scrollTrigger: {
    trigger: ".web",
    scroller: "body",
    start: "top 80%",
    scrub: true,
  },

  x: -100,
  opacity: 0,
  stagger: 0.3,
});

t1.from(".cloud", {
  scrollTrigger: {
    trigger: ".cloud",
    scroller: "body",
    start: "top 80%",
    scrub: true,
  },

  x: 100,
  opacity: 0,
  stagger: 0.3,
});

t1.from(".graphic", {
  scrollTrigger: {
    trigger: ".graphic",
    scroller: "body",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },

  x: -100,
  opacity: 0,
  stagger: 0.3,
});

t1.from(".animation", {
  scrollTrigger: {
    trigger: ".animation",
    scroller: "body",
    start: "top 80%",
    scrub: true,
  },

  x: 100,
  opacity: 0,
  stagger: 0.3,
});

gsap.to(".services", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.to(".card-grid", {
  backgroundColor: "white",
  scrollTrigger: {
    trigger: ".card-grid",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

t1.from(".card img", {
  scale: 0.5,
});

t1.to(".card img", {
  y: 7,
  repeat: -1,
  duration: 1,
  yoyo: true,
});

gsap.to("#robo", {
  scrollTrigger: {
    trigger: "#robo",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },

  duration: 1,
  delay: 0.3,
});
