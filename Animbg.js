class Animbg {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }
    listenCursorMove(event) {
        const { clientX, clientY } = event;
        const centerX = innerWidth / 2;
        const centerY = innerHeight / 2;

        const posX = clientX - centerX;
        const posY = clientY - centerY;
        this.elements.forEach(el => this.moveElement(el, posX, posY));
    }
    moveElement(element, posX, posY) {
        const ratioX = -element.getAttribute("ratioX");
        const ratioY = -element.getAttribute("ratioY");

        element.style.transform = 
        `translate(${posX*ratioX}px, ${posY*ratioY}px)`;
    }
}