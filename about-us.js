// JavaScript code for the typewriter effect
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), 0, 100);
        }
    }
});

var TxtType = function (el, toRotate, i, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 70 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }



    setTimeout(function () {
        that.tick();
    }, delta);
};
