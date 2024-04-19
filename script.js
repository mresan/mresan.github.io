$(document).ready(function () {
  // fadeIn main-text animation
  fade('#1st', 500);
  fade('#2nd', 700);
  fade('#3rd', 900);
  fade('.sub-text', 1100);

  // navigation hover animation
  navHover('.nav-item');
  navHover('.contact');

  // button hover animation
  buttHover('.buttons');

  // main img animation
  setInterval(function () {
    $('img') //
      .animate({ top: '100px' }, 3000)
      .animate({ top: '50px' }, 3000);
  }, Infinity);

  // form active animation
  $('input').focus(function () {
    // Menghapus kelas 'form-active' dari semua elemen input
    $('input').removeClass('form-active');
    // Menambahkan kelas 'form-active' ke elemen input yang sedang aktif
    $(this).addClass('form-active');
  });
});

function fade(f, s) {
  $(f)
    .css({
      opacity: 0,
      left: '-30px',
    })
    .animate(
      {
        opacity: 1,
        left: '0px',
      },
      s
    );
}

function navHover(f) {
  $(f).hover(function () {
    $(this).toggleClass('nav-toggle');
  });
}

function buttHover(f) {
  $(f) //
    .mouseenter(function () {
      $(this).css('background-color', '#0c294a');
    })
    .mouseleave(function () {
      $(this).css('background-color', '#124076');
    })
    .css('transition', 'background-color 0.3s ease');
}

const click = document.querySelectorAll('.nav-item');
console.log(click);

// for (i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//   });
// }

click.forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log(e.target.outerText);
    window.location.href = 'product.html';
  });
});
