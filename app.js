gsap.registerPlugin(ScrollTrigger);
const texts = document.querySelectorAll(".hero__footer p");


// Анимация телефона при скролле


gsap.matchMedia().add("(min-width: 768px)", () => {
  // Анимация для планшетов, ноутбуков и десктопов (экран шире 768px): телефон перемещается вправо
  gsap.to(".work__img img", {
    x: 15, // Смещение по оси X вправо
    ease: "none",
    scrollTrigger: {
      trigger: ".work__img img",
      start: "top top",
      end: "bottom 100%",
      scrub: true
    }
  });
});



// Анимация при перемещения скролла

if(window.innerWidth > 768){
  const el_animate = document.querySelectorAll(".animate_move");

  window.addEventListener("mousemove", (ev) => {
    const {clientY} = ev;

    el_animate.forEach((el) => {
      gsap.to(el, {
        y: (clientY - window.innerHeight / 2) * 0.05,
        duration: 0.5,
        ease: 'power1.out', 
      })
    })
  })
}

// Анимация отрисовки линии

gsap.to('.underline path', {
  strokeDashoffset: 0, 
  duration: 1,         
  ease: 'power2.out'   
});


gsap.set(texts, { autoAlpha: 0, position: 'absolute', }); // Устанавливаем начальное состояние (все скрыты)
const tl = gsap.timeline({ repeat: -1 }); // repeat: -1 для бесконечной анимации

texts.forEach((text, i) => {
  tl.to(text, { autoAlpha: 1, duration: 1 }) // Плавное появление
    .to(text, { autoAlpha: 0, duration: 1 }, "+=2"); // Плавное исчезновение после паузы
});
