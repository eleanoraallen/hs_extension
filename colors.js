$(document.getElementsByTagName("span")).each(function(index) {
    console.log(this.style.color);

    // change nanasprite/jane's color
    if (this.style.color == 'rgb(0, 213, 242)') {
        this.style.color = '#1E90FF';
    }

    // change doc scratch's color
    if (this.style.color == 'rgb(255, 255, 255)') {
        this.style.color = 'black';
    }
});