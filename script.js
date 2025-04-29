
Shery.mouseFollower();
Shery.makeMagnet('.magnet')
Shery.makeMagnet('.tag')
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
    style: 5,
    // config: { onMouse: { value: 1 } },                
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

  Shery.textAnimate(".hhh" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

//   Shery.imageEffect(".slide .Img", {
//     style: 6,
//     config: { // Correct config structure
//         transition: {
//             duration: 0.7,
//             ease: "power2.inOut"
//         }
//     }
// });