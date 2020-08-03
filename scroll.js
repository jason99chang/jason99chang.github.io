const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPoisitionY = offset * 0.7 + "px"
})