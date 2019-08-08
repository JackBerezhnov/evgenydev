var typed = new Typed('#typed-string', {
    strings: ["Web developer", "<h1>Web developer</h1>", "<h1>Frontend developer</h1>" ],
    typeSpeed: 50
});

function hideme() {
    var span = document.getElementsByClassName("typed-cursor");
    span.parentNode.removeChild(span);
}