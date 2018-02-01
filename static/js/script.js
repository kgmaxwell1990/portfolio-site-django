$(document).ready(function(){

    $('#hi').addClass('animated fadeIn');
    $('#i_am').addClass('animated fadeInRight')
    $('#view').addClass('animated fadeIn');

    var app = document.getElementById('app');
    var app2 = document.getElementById('app2');
    
    var typewriter1 = new Typewriter(app, {
        loop: false,
        cursor: "",
        typingSpeed: 30
        
    });
    var typewriter2 = new Typewriter(app2, {
      loop: true,
      cursor: "",
      deleteSpeed: 30,
      typingSpeed: 30
  });
    
    typewriter1.pauseFor(3000)
        .typeString('I am a Full Stack Developer')
        .start();

    typewriter2.pauseFor(5000)
      .typeString('I code using ')
      .typeString('HTML')
      .pauseFor(1500)
      .deleteChars(4)
      .typeString('CSS')
      .pauseFor(1500)
      .deleteChars(3)
      .typeString('JavaScript')
      .pauseFor(1500)
      .deleteChars(10)
      .typeString('Python')
      .pauseFor(1500)
      .start()
      
      

       

    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });

    

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