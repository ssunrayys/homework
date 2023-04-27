This is ladder (ladder) - an object that allows you to go up and down:

let ladder = {
step: 0
up: function() {
this.step++;
},
down: function() {
this.step--;
},
showStep: function() { // show the current step
alert(this.step);
}
};


Now, if we need to make multiple consecutive calls, we can do it like this:



ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1




Change the up, down, and showStep methods so that they can be called in a chain, like so:



ladder.up().up().down().showStep(); // 1