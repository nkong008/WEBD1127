// console.log($);

$(document).ready(function () {

    // jQuery methods go here...

    gsap.registerPlugin(DrawSVGPlugin);

    //variables
    let mySVG = $('svg#mysvg')
    let circle = $('.circle')
    let letters = $('.letter')
    let paths = $('.myPaths');


    console.log(paths);

    // gsap.from(circle, {duration: 4, drawSVG: 0, delay: 5});
    let tl1 = gsap.timeline();
    // tl1.from(circle, {duration: 3, drawSVG: 0, ease: "back.out(1.7)", stroke:"#be3455"}, 1)
    tl1.fromTo(circle, {stroke: "#6440F5", drawSVG: "0%"},{duration: 3, drawSVG: "100%", ease: "back.out(1.7)", stroke:"#36F8FF"}, 1)

    //stagger seprates beginning time for each one
    // you can start an object earlier by using a negative 
    tl1.from(letters, {duration: 3, stagger: 1, drawSVG: 0}, 1)

    //overrides css
    gsap.set(circle, {stroke: "#6440F5"});

    let tl2 = gsap.timeline();
    tl2.from(paths, {duration: 3, autoAlpha: 0, stagger: 0.3, ease: "bounce.out"}), 2;

    GSDevTools.create();
    //jQuery ends here////
});