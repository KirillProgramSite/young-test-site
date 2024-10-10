// window.addEventListener('scroll', () => {
//     const phone = document.querySelector('.work__img img');
//     const scrollPosition = window.scrollY;
  
//     // Двигаем телефон медленнее прокрутки для эффекта параллакса
//     phone.style.transform = `translateX(-${scrollPosition * 0.05}px)`; // Множитель 0.5 делает движение медленнее
//   });
  

gsap.registerPlugin(ScrollTrigger);

gsap.to(".work__img img", {
  x: -15, // Укажи, насколько далеко телефон должен двигаться влево
  ease: "none",
  scrollTrigger: {
    trigger: ".work__img img", // Триггер для начала анимации
    start: "top top", // Когда верхняя часть телефона касается верхней части экрана
    end: "bottom 100%", // Когда телефон уходит за нижнюю часть экрана
    scrub: true // Связь со скроллом для эффекта параллакса
  }
});
