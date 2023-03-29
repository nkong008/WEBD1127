$(function () {
  let login = $("section#login");
  let welcomeMain = $("section#welcome-main-content");
  let fullGradient = $("div#full-gradient-background");
  let submit = $("button#submit");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");

  // targeting css
  login.css("visibility", "visiable");
  welcomeMain.css("visibility", "hidden");

  let welcomeMidChildren = welcomeMiddle.children();
  console.log(welcomeMidChildren);
 
  // jQuery events need to use function

  submit.click(loadWelcome);
    // login.css("visibility", "hidden");
    // welcomeMain.css("visibility", "visiable");
    // fullGradient.css("visibility", "hidden");


  function loadWelcome() {
    login.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");
    fullGradient.css("visibility", "hidden");

    //using green sock animation
    //timeline
    let tl = gsap.timeline();
    tl.from(welcomeTop, {opacity: 0, y: -200, duration: 0.8, ease:"elastic.out(1, 0.75)"}, "+=0.5");
    tl.from(welcomeMiddle, {opacity: 0, y: 200, duration: 0.8, ease: "elastic.out(1, 0.75)"});

    


  }
});
