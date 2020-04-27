class Timer {
    constructor(durationInput, startButton, pauseButton) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
  
      //this invokes start method
      this.startButton.addEventListener('click', this.start);
    }
  
    //equivalent to start: function ()
    start() {
        console.log('Time to start the timer!');

        //We want the keyword 'this' here to equal to the 'this' in the addEventListener
        this.importantMethodToCall();
    }

    importantMethodToCall (){
        console.log ('Important thing was done');
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
function start(), versus the 'this' inside the addEventListener. 


The Value of 'this':
Did you define the function with an arrow function? 
Wrtie 'console.log(this)' on the first valid line above the arrow function. Value of 
'this' in the arrow function will be equal to that console log. 

Did you call 'bind', 'call', or 'apply' on the function when you invoke it? 
'this' is equal to the first argument of 'bind', 'call', or 'apply'.

All other classes
'this' is equal to whatever is to the left of the '.' in the method call.


  */
