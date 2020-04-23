// auto expand pesterlogs
$(document.getElementsByClassName('o_chat-log')).each(function(index) {
    this.className = this.className.replace('disp-n', '');
});

// update pesterlog button
$(document.getElementsByClassName('o_chat-log-btn')).each(function(index) {
    if (this.innerHTML == "Show Pesterlog") {
        this.innerHTML = "Hide Pesterlog";
    } else {
        this.innerHTML = "Hide Dialogue"
    }
});