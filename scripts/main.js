document.addEventListener('DOMContentLoaded', function () {
  new MobileMenu();
  const el = document.querySelector('.header-torigger');
  const $header = document.querySelector('.header');
  const cb = function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        //console.log('outview');
        $header.classList.add('torigger');
      } else {
        //console.log('inview');
        $header.classList.remove('torigger');
      }
    });
  }
  const io = new IntersectionObserver(cb);
  io.observe(el);

  const slide_cb = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview');
        observer.unobserve(entry.target);
      }
    })
  }
});