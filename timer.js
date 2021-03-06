class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;


        //this invokes start method
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

        /*
        Here, the callbacks aren't optional, but we use all of them here. It is a good idea though, 
        in general, to assume they are optional and check if they exist.
        */
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }


    /*
    Babel shows that this function will be executed inside of the constructor,
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    start = () => {

        //Again, it is a good idea to check to make sure onStart was initialized in the constructor before using it.
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }

        //we want tick to be called the first time immediately the user clicks the button
        this.tick();

        //run tick every second, starting 1 second after the user clicks the button
        this.interval = setInterval(this.tick, 20);

    }
    pause = () => {
        console.log('Timer paused!');

        /*
        note that setInterval returns an integer. If you want to stop it, you run clearInterval
        */
        clearInterval(this.interval);
    }


    /*tick is called inside the start function, so
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    tick = () => {

        if (this.timeRemaining <= 0) {

            this.pause();
            if (this.onComplete){
                this.onComplete();
            }
            
        }
        else {
            this.timeRemaining = this.timeRemaining - 0.2;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }


    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed (2);
    }

}