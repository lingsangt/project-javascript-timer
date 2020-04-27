class Timer {
    constructor(durationInput, startButton, pauseButton) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
  
      //this invokes start method
      this.startButton.addEventListener('click', this.start);
    }
  
    start() {
        console.log('Time to start the timer!');

    }

  }
  
  const durationInput = document.querySelector('#duration');
  const startButton = document.querySelector('#start');
  const pauseButton = document.querySelector('#pause');
  
  const timer = new Timer(durationInput, startButton, pauseButton);
  
  /*
Note: If we called timer.start () directly, this creates a different instance than 
when the button is clicked. 

You can check this by adding the line console.log (this) and checking the printouts
in the console. 

You have to have a much better understanding of what the keyword 'this' inside the 
function start(). 
  */
