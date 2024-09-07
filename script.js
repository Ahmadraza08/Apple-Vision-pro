// gsap.registerPlugin(ScrollTrigger);

// function locomotive() {
//     // Ensure GSAP and ScrollTrigger are loaded and registered
//     gsap.registerPlugin(ScrollTrigger);

//     // Initialize Locomotive Scroll
//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });

//     // Use scrollerProxy from ScrollTrigger to connect with Locomotive Scroll
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     // Update ScrollTrigger on Locomotive Scroll updates
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // Refresh ScrollTrigger and update Locomotive Scroll on window resize
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // Initial refresh
//     ScrollTrigger.refresh();
// }

// // Call the function to initialize
// locomotive();

document.addEventListener("DOMContentLoaded", function () {
    const store = document.getElementById("store");
    const storeSec = document.getElementById("store-sec");
    const mac = document.getElementById("mac");
    const macSec = document.getElementById("mac-sec");
    const iPad = document.getElementById("iPad");
    const iPadSec = document.getElementById("iPad-sec");
    const iPhone = document.getElementById("iPhone");
    const iPhoneSec = document.getElementById("iPhone-sec");
    const watch = document.getElementById("watch");
    const watchSec = document.getElementById("watch-sec");

    if (store && storeSec) {
        store.addEventListener("mouseenter", function () {
            storeSec.classList.add("show");
        });

        store.addEventListener("mouseleave", function () {
            storeSec.classList.remove("show");
        });
    };
    
    if (mac && macSec) {
        mac.addEventListener("mouseenter", function () {
            macSec.classList.add("show");
        });

        mac.addEventListener("mouseleave", function () {
            macSec.classList.remove("show");
        });
    };

    if (iPad && iPadSec) {
        iPad.addEventListener("mouseenter", function () {
            iPadSec.classList.add("show");
        });

        iPad.addEventListener("mouseleave", function () {
            iPadSec.classList.remove("show");
        });
    }; 
    
    if (iPhone && iPhoneSec) {
        iPhone.addEventListener("mouseenter", function () {
            iPhoneSec.classList.add("show");
        });

        iPad.addEventListener("mouseleave", function () {
            iPhoneSec.classList.remove("show");
        });
    }; 

    if (watch && watchSec) {
        watch.addEventListener("mouseenter", function () {
            watchSec.classList.add("show");
        });

        watch.addEventListener("mouseleave", function () {
            watchSec.classList.remove("show");
        });
    }; 
});


