// Setting visibility of navbar

const navbar = document.getElementById('navbar');
let scrolled = false;
window.onscroll = navVisibility;

function navVisibility(){
    // checking vertical axis (100px)
    if(window.pageYOffset > 100){
        navbar.classList.remove('top');

        // ---- optional -----
        // removes navbar
        if(!scrolled){
            navbar.style.transform = 'translateY(-310px)';
        }

        // displays navbar
        setTimeout(function(){
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 230);
    }else{
        navbar.classList.add('top');
        scrolled = false;
    }
}

// smooth scrolling
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });
