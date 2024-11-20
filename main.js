

document.addEventListener("DOMContentLoaded", function() {
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".header_container img", {
        duration: 1000,
    });
    ScrollReveal().reveal(".header_container h1", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".header_btn", {
        ...scrollRevealOption,
        delay: 1000,
    });
});


