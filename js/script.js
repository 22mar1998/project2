// gsap (animations)

const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
    .from('#logo', { y: -100 })
    .from('.hero-text', { opacity: 0 })
    .from('.hero-img', { opacity: 0 })
    .from('.nav-links a', { opacity: 0, stagger: .3 })




// jquery (menu)

$(document).ready(function () {
    $(".menu-btn").click(function () {
        $(".nav-links").show(300);
    });
});

$(document).ready(function () {
    $(".menu-btn-close").click(function () {
        $(".nav-links").hide(300);
    });
});

// $(document).ready(function () {
//     $(".nav-links a").click(function () {
//         $(".nav-links").hide();
//     });
// });
