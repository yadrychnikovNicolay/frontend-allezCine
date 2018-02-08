
// slick ---------------------------------------------------------------------------

$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,


});


  $('.bio').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
            autoplay: true,
          autoplaySpeed: 2000,

  });

  //iphone queries
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {

    if (document.cookie.indexOf("iphone_redirect=false") == -1) {
      console.log("all apple users are faggots")
    }

}


  //JS queries -------------------------------------------------------------------
//   if (window.matchMedia("(max-width: 480px)").matches) {
//         $("#wholePage").removeClass("container-fluid");
//         $("#pageElements").removeClass("container").addClass("container-fluid");
//
// }

//counting clicks --------------------------------------------------------------------
let count = 1;
$(window).on("click", function(){
  count++;
});

let easterClick = 0;
$("#easterEgg").on("click", function(){
  easterClick++;
  checkEaster();
});


let checkEaster = function(){
  if (easterClick >= 7) {
  window.alert("You found the easter egg! your total clicks on this page is " + count)
}
}






//back to top -------------------------------------------------------------------
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
}






//slidejs -----------------------------------------------------------------------
  $(function() {
    $('#slides').slidesjs({
      width: 940,
      height: 528,
      play: {
        active: true,
        auto: true,
        interval: 4000,
        swap: true
      }
    });
  });

  $(".movie-item").click(function() {
  let title = $(this).attr('data-title');
  let year = $(this).attr('data-year');
  let trailer = $(this).attr('data-trailer');
  let synopsis = $(this).attr('data-synopsis');
  $(".title").text(title);
  $(".year").text("year : " + year);
  $(".modal-body").html('<div class="embed-responsive embed-responsive-16by9"><<iframe width=450 height=250 src="' + trailer + '" frameborder="0" encrypted-media allowfullscreen></iframe></div>');
  $(".modal-body").append("<div class=synopsis>" + synopsis + "</div>");
});

  //scrollTo --------------------------------------------------------------------
$(".presLink").click(function() {
  $('html,body').animate({
      scrollTop: $(".presentation").offset().top},
      'slow');
});
$(".bioLink").click(function() {
  $('html,body').animate({
      scrollTop: $(".bio").offset().top},
      'slow');
});
$(".photoLink").click(function() {
  $('html,body').animate({
      scrollTop: $(".photo").offset().top},
      'slow');
});
$(".goodiesLink").click(function() {
  $('html,body').animate({
      scrollTop: $(".goodies").offset().top},
      'slow');
});
$(".contactLink").click(function() {
  $('html,body').animate({
      scrollTop: $(".contact").offset().top},
      'slow');
});

//countdown- ---------------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Feb 12, 2018 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML ="Hurry, the merch changes in " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
});

// goodies-----------------------------------------------------------------------
$(".goodieOne").on("click", function(){
  window.open("https://www.logo-store.fr/films-action-aventure/produits-derives-films-reservoir-dogs/pack-5-figurines-deluxe-reservoir-dogs-18-cm.html");
})
$(".goodieTwo").on("click", function(){
  window.open("https://www.bmfwallets.com/");
})
$(".goodieThree").on("click", function(){
  window.open("https://www.ebay.com/itm/Handmade-Kill-Bill-Brides-Samurai-Katana-Sword-w-Display-Stand-Cleaning-Kits-/202117681975");
})



// $(document).ready(function(){
//
//   var showHeaderAt = 150;
//
//   var win = $(window),
//       body = $('body');
//
//   // Show the fixed header only on larger screen devices
//
//   if(win.width() > 600){
//
//     // When we scroll more than 150px down, we set the
//     // "fixed" class on the body element.
//
//     win.on('scroll', function(e){
//
//       if(win.scrollTop() > showHeaderAt) {
//         body.addClass('fixed');
//       }
//       else {
//         body.removeClass('fixed');
//       }
//     });
//
//   }
//
// });

// $('.txt').html(function(i, html) {
//   var chars = $.trim(html).split("");
//
//   return '<span>' + chars.join('</span><span>') + '</span>';
// });

// $(document).ready(function () {
//     $(window).on('load scroll', function () {
//         var scrolled = $(this).scrollTop();
//         $('#title').css({
//             'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
//             'opacity': 1 - scrolled / 400 // fade out at 400px from top
//         });
//         $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
//     });
//
//     // video controls
//     $('#state').on('click', function () {
//         var video = $('#hero-vid').get(0);
//         var icons = $('#state > span');
//         $('#overlay').toggleClass('fade');
//         if (video.paused) {
//             video.play();
//             icons.removeClass('fa-play').addClass('fa-pause');
//         } else {
//             video.pause();
//             icons.removeClass('fa-pause').addClass('fa-play');
//         }
//     });
    // });
