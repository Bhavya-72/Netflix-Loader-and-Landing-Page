gsap.from("#logo #first",{
    height:0,
    duration:1,
    delay:0.4,
})

gsap.from("#logo #second",{
    height:0,
    duration:1,
    delay:1,
    z:999,
})

gsap.from("#logo #third",{
    height:0,
    duration:1,
    delay:1.5,
    
})
gsap.to("#logo",{
    x:-300,
    delay:2,
    duration:2,
    opacity:0
})
gsap.from("#netflix",{
    opacity:0,
    delay:3,
    duration:2,

})
gsap.to("#netflix",{
    x:-260,
})
gsap.to("#netflix h1",{
    y:30,
    repeat:0,
    duration:0.7,
    yoyo:true
})

gsap.to("#loader",{
    y:"-200vh",
    delay:4,
    duration:6,
    opacity:0,

})
gsap.from("#netflix",{
    scale:1,
    
})

gsap.to("#netflix",{
    scale:2.9,
    delay:1
})
gsap.to("#page1",{
    y:"-100vh",
    duration:1,
    delay:5,
})

