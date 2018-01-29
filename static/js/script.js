$(document).ready(function(){
    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });
    // $("#titleline").fadeIn(1000);

    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 150) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".brandtitle").css("color", "black");
      } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        $(".brandtitle").css("color", "white");
      }
    });

    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, like open/close menu
    });
  });