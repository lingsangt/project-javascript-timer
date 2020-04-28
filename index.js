
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector ('circle');

const perimeter = circle.getAttribute ('r')*2*Math.PI;
circle.setAttribute ('stroke-dasharray', perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {

    /*
    Watch for this event indicating that the timer has started. When it occurs, draw the border.
    This onStart callback is going to be invovked the instant we start up the timer
    */
    onStart() {
        console.log('Timer just started!')
    },
    //Watch for this event indicating that the timer has 'ticked.' When it occurs, update the border.
    onTick() {
            circle.setAttribute ('stroke-dashoffset', currentOffset);
            currentOffset = currentOffset - 50;
    },
    //Watch for this event indicating that the timer is done. When it occurs, reset the border.
    onComplete() {

    }

});

