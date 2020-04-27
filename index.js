class Timer {
    constructor(durationInput, startButton, pauseButton) {
        //console.log (this)
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        //this invokes start method
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener ('click', this.pause);
    }


    /*
    Babel shows that this function will be executed inside of the constructor,
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    start =() => {

        //we want tick to be called the first time immediately the user clicks the button
        this.tick ();

        //run tick every second, starting 1 second after the user clicks the button
        this.interval = setInterval (this.tick, 1000);

    }
    pause = () => {

        /*
        note that setInterval returns an integer. If you want to stop it, you run clearInterval
        */
        clearInterval (this.interval);
    }


    /*tick is called inside the start function, so
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    tick = () => {
        
        if (this.timeRemaining < 0){
            this.pause ();
        }
        else {
            /*
            This is equivalent to:
            const timeRemaining = this.timeRemaining; //Uses getter method to get remaining time
            this.timeRemaining = timeRemaining -1; //Uses setter method to update time
            */
            this.timeRemaining = this.timeRemaining -1;
        }


    }

    get timeRemaining (){
        return parseFloat (this.durationInput.value);
    }

    set timeRemaining (time){
        this.durationInput.value = time;
    }

  }
  
  const durationInput = document.querySelector('#duration');
  const startButton = document.querySelector('#start');
  const pauseButton = document.querySelector('#pause');
  
  const timer = new Timer(durationInput, startButton, pauseButton);
  
/*


*/
