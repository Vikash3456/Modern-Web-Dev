
Shery.mouseFollower();
Shery.makeMagnet('.magnet')

// Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
//     images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
//     //videos: ["video1.mp4", "video2.mp4"],
//   });

Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4","./2.mp4","./3.mp4"]})


gsap.to(".fleft_elem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",        //scroll trigerr to fix the screen 
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1    //  move karana hia 
})

let sections=document.querySelectorAll(".fleft_elem")
Shery.imageEffect(".images", {
    style: 3,
    slideStyle: (setScroll) => {
      sections.forEach(function(section,index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){    // jab app ka element scroll ho raha hoga to wo kinta scroll ho chuka hai 
           setScroll(prog.progress+index)
            }
        })
      })
    },
  });