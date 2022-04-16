var tlAnimation = new TimelineMax()

tlAnimation.staggerFromTo('.image', 1, {x: -200, opacity: 0},{x:0, opacity: 1})
.staggerFromTo('.developer p', 1 , {y: -650}, {y:0}, 0.5)