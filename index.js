class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        //console.log (this)
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        //this invokes start method
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener ('click', this.pause);

        /*
        Here, the callbacks aren't optional, but we use all of them here. It is a good idea though, 
        in general, to assume they are optional and check if they exist.
        */
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }


    /*
    Babel shows that this function will be executed inside of the constructor,
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    start =() => {

        //Again, it is a good idea to check to make sure onStart was initialized in the constructor before using it.
        if (this.onStart){
            this.onStart;
        }

        //we want tick to be called the first time immediately the user clicks the button
        this.tick ();

        //run tick every second, starting 1 second after the user clicks the button
        this.interval = setInterval (this.tick, 1000);

    }
    pause = () => {
        console.log ('Timer paused!');

        /*
        note that setInterval returns an integer. If you want to stop it, you run clearInterval
        */
        clearInterval (this.interval);
    }


    /*tick is called inside the start function, so
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    tick = () => {
        
        if (this.timeRemaining <= 0){
            
            this.pause ();
            this.onComplete ();
        }
        else {
            /*
            This is equivalent to:
            const timeRemaining = this.timeRemaining; //Uses getter method to get remaining time
            this.timeRemaining = timeRemaining -1; //Uses setter method to update time
            */
            this.timeRemaining = this.timeRemaining -1;
            if (this.onTick){
                this.onTick ();
            }
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
  
  
  /*
  Part 3: Updating the border will be more complicated, so it split it into segments.
  */

 
  const timer = new Timer(durationInput, startButton, pauseButton, {

        /*
        Watch for this event indicating that the timer has started. When it occurs, draw the border.
        This onStart callback is going to be invovked the instant we start up the timer
        */
        onStart(){
            console.log ('Timer just started!')
        }, 
        //Watch for this event indicating that the timer has 'ticked.' When it occurs, update the border.
        onTick(){

        }, 
        //Watch for this event indicating that the timer is done. When it occurs, reset the border.
        onComplete(){

        }

  });
  
/*


*/
