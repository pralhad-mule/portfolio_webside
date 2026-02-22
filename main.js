var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Animate service boxes on scroll
const serviceBoxes = document.querySelectorAll('.service-box');

window.addEventListener('scroll', () => {
  serviceBoxes.forEach(box => {
    const boxPosition = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxPosition < windowHeight - 100) {
      box.style.animation = "fadeUp 1s forwards";
    }
  });
});
         

// Skills section 
document.addEventListener("DOMContentLoaded", () => {

  /* Typed.js */
  new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  /* Skills Progress Bar */
  const skillSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".progress-bar span");
  let skillsAnimated = false;

  window.addEventListener("scroll", () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !skillsAnimated) {
      progressBars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      skillsAnimated = true; // animate only once
    }
  });

});











// // Portfolio animation on scroll
// const portfolioBoxes = document.querySelectorAll(".portfolio-box");

// window.addEventListener("scroll", () => {
//   portfolioBoxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (boxTop < windowHeight - 100) {
//       box.style.animation = "fadeUp 1s forwards";
//     }
//   });
// });




// // Portfolio animation on scroll
// const portfolioBoxes = document.querySelectorAll(".portfolio-box");

// window.addEventListener("scroll", () => {
//   portfolioBoxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (boxTop < windowHeight - 100) {
//       box.style.animation = "fadeUp 1s forwards";
//     }
//   });
// });


// // Contact form submit
// const contactForm = document.querySelector(".contact-form");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Message sent successfully!");
//   contactForm.reset();
// });
