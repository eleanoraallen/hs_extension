let back;
let forth;

// get next and previous urls
$(document.getElementsByTagName("a")).each(function(index) {
    if (this.innerHTML == "Go Back") {
        back = this.href;
        forth = "https://www.homestuck.com/story/";
        forth = forth + String(Number(this.href.replace("https://www.homestuck.com/story/","")) + 2);
    }
});;

// navigate to back or forth urls on key press
document.addEventListener('keydown', k => {
    if (k.keyCode == 37) {
        window.open(back, '_self');
    } else if (k.keyCode == 39) {
        window.open(forth, '_self');
    }
})