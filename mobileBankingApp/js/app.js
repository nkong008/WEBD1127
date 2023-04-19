$(function () {
  gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
  let container = $(".container");
  console.log(".container");
  let login = $("section#login");
  let welcomeMain = $("section#welcome-main-content");
  let fullGradient = $("div#full-gradient-background");
  let submitBtn = $("button#submit");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");
  let checkingMain = $("#checking-main-content");
  let checkingBtn = $("#checking");
  let redChevron = $("#left");
  let checkingDataDivs = $ (".checking-data-divs");
  console.log(checkingDataDivs)

  // $("body").css("visibility", "hidden");
  // $("body").load(loadLogin);

  //svg animation for login 
  function loadLogin() {
    // console.log("it works");
    let tl = gsap.timeline({id: "tl00"});
    //This is the tool that shows the play and repeat 
    // GSDevTools.create({animation: "tl00"});

    tl.fromTo(container, {opacity: 0}, {opacity: 1, duration:1.5});

    tl.from($(".st1"), {fill: "transparent", duration: 1.5});
    tl.from($(".st1"), {drawSVG: "0%", duration: 1.5}, "-=0.75");
    // console.log($(".st3"));
    tl.from($(".st3"), {opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"}, "-=1.25");
    // example of chaining 
    tl.from($("input#username"), {opacity: 0, y: 100, duration: 0.75}, "-=0.25" );
    tl.from($("input#password"), {opacity: 0, y: 100, duration: 0.75}, "-=0.25");
    //place duration in the to state!!!!!!!!!!!!!
    tl.fromTo($("button#submit"), {opacity: 0, y: 100, duration: 0.75},  {opacity: 1, y: 0, duration: 0.75}, "-=0.25");
    
  };
  loadLogin();

  //end of svg animation 

  // targeting css
  login.css("visibility", "visiable");
  checkingMain.css("visibility", "hidden");
  welcomeMain.css("visibility", "hidden");

  let welcomeMidChildren = welcomeMiddle.children();
  console.log(welcomeMidChildren);
 
  // jQuery events need to use function

  submitBtn.click(loadWelcome);
    // login.css("visibility", "hidden");
    // welcomeMain.css("visibility", "visiable");
    // fullGradient.css("visibility", "hidden");


  function loadWelcome() {
    login.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");
    fullGradient.css("visibility", "hidden");

    //using green sock animation
    //timeline
    let tl = gsap.timeline({id: "tl01"});
    tl.from(welcomeTop, {opacity: 0, y: -200, duration: 0.8, ease:"elastic.out(1, 0.75)"}, "+=0.5");
    tl.from(welcomeMiddle, {opacity: 0, y: 200, duration: 0.8, ease: "elastic.out(1, 0.75)"});
    // GSDevTools.create({animation: "tl01"});

  }
  checkingBtn.click(loadChecking);
  function loadChecking() {
   
    welcomeMain.css("visibility", "hidden");
    checkingMain.css("visibility", "visible");

    //animation for checking 
    let tl = gsap.timeline();
    tl.from(checkingDataDivs, {opacity: 0, duration: 2, stagger: 0.3, ease: "power4.out"})
  }
  redChevron.click(reLoadchecking);
  function reLoadchecking() {
    checkingMain.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");
  }
});
