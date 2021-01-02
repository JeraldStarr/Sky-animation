document.addEventListener("DOMContentLoaded", function() {
    const animbg = new Animbg(".anim-bg");

    document.addEventListener("mousemove", event => animbg.listenCursorMove(event));
})