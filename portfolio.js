


/* ################### ACTIVE NAVLINKS ######################"" */

const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`header .menu .menu-list li a[href*="#${id}"]`);
    if ( currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight){
      currentNavLink.classList.add("active");
    } 
	else{
      currentNavLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollTracker);





/* ################### SLIDING CARDS ######################"" */

var swiper = new Swiper('.mySwiper', {

        loop:true,
        grabCursor:true,
        spaceBetween:30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable:true,
          dynamicBullets:true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0:{
                slidesPerView:1
            },
            750:{
                slidesPerView:2
            },
            1050:{
                slidesPerView:3
            },
        }

      });




/* ################### SHOW NAVBAR AND X OR BARS ######################"" */


const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const menuList = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  // Check if it's currently the bars icon
  if (menuIcon.classList.contains('fa-bars')) {
    // Instantly replace bars with X
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark'); // Note: 'fa-xmark' is used in FA v6; use 'fa-times' for FA v5
    menuList.classList.add('show-menu');
  } else {
    // Instantly replace X back to bars
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    menuList.classList.remove('show-menu');
    
  }
});

  


/* ################### SCROLL REVEAL ######################"" */

ScrollReveal({
	reset: false,
	distance:'80px',
	duration:2000,
	delay:200,
	
	
});

ScrollReveal().reveal('.home .home-container .home-content h1', {origin:'top'});
ScrollReveal().reveal('.home .home-container .home-content h3', {origin:'top'});
ScrollReveal().reveal('.home .home-container .home-content p', {origin:'left'});
ScrollReveal().reveal('.home .home-container .home-content .social-media a', {origin:'bottom'});
ScrollReveal().reveal('.home .home-container .btn button', {origin:'bottom'});
ScrollReveal().reveal('.home .img img', {origin:'right'});

ScrollReveal().reveal('.about .about-img img', {origin:'left'});
ScrollReveal().reveal('.about .about-content .about-h', {origin:'right'});
ScrollReveal().reveal('.about .about-content p', {origin:'bottom'});
ScrollReveal().reveal('.about .btn button', {origin:'bottom'});

ScrollReveal().reveal('.education .education-h', {origin:'top'});
ScrollReveal().reveal('.education .container .swiper ', {origin:'top'});

ScrollReveal().reveal('.skills h1', {origin:'right'});
ScrollReveal().reveal('.skills .content', {origin:'bottom'});

ScrollReveal().reveal('.project .project-h', {origin:'left'});
ScrollReveal().reveal('.project .project-box', {origin:'bottom'});

ScrollReveal().reveal('.contact .contact-h', {origin:'right'});
ScrollReveal().reveal('.contact .form form', {origin:'left'});
ScrollReveal().reveal('.contact .form form input', {origin:'bottom'});
ScrollReveal().reveal('.contact .form form .message', {origin:'right'});
ScrollReveal().reveal('.contact .social-media', {origin:'bottom'});




