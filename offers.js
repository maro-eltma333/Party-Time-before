var initialNavbarPosition = document.getElementById("navbar").offsetTop;

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var navbarBackground = document.getElementById("navbar-background");
    var content = document.getElementById("services"); // Adjusted the content ID

    if (window.scrollY > initialNavbarPosition) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.style.zIndex = "5";
        content.style.marginTop = navbar.offsetHeight + "px";
    } else {
        navbar.style.position = "relative";
        navbar.style.top = "auto";
        content.style.marginTop = "0";
    }
}