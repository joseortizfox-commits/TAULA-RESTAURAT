(function(){
  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navLinks');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  toggle.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.16, rootMargin:'0px 0px -60px 0px'});
    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('is-visible'); });
  }
})();
