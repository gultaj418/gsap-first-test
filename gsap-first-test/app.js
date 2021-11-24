gsap.to(".hero", {
  duration: 2,
  x: 120,
  backgroundColor: "violet",
  borderRadius: "40%",
  border: "5px solid purple",
  ease: "elastic",
});

gsap.to(".astranaut", {
  duration: 2,
  x: -120,
  backgroundColor: "violet",
  borderRadius: "40%",
  border: "5px solid purple",
  ease: "elastic",
});

// gsap.from(".card", { y: -150, opacity: 0.3 });

gsap.to(".card", { y: 150, opacity: 1, stagger: 0.55 });
