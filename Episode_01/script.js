// gsap.to("#box1",{
//     x:1000,
//     duration:4,
//     delay:.1,
//     backgroundColor:"red",
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5
// })

// gsap.from("#box2",{
//     x:1000,
//     duration:4,
//     delay:.1,
//     backgroundColor:"red",
//     borderRadius:"50%",
// })

// gsap.from("h1",{
//     duraton:1,
//     delay:1,
//     opacity:0,
//     stagger:1,
//     y:30
// })

// gsap.to("#box1",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true,

// })

var tl = gsap.timeline();

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h3",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5
})

tl.from("h1",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.5,
    scale:1
})