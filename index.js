class Timer {
    constructor(durationInput, startButton, pauseButton) {
        //console.log (this)
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        //this invokes start method
        this.startButton.addEventListener('click', this.start);
    }
  
    /*
    Babel shows that this function will be executed inside of the constructor.
    */
    start =() => {
        console.log('Time to start the timer!');

        //We want the keyword 'this' here to equal to the 'this' in the addEventListener
        /*
        Because this is an arrow function and this code is executed as if it were inside the constructor, 
        the keyword 'this' would be equivalent to 'this' console.log(this)' line in comments in the constructor,
        which is equal to the instance of the class because it's the constructor function.
        */
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


Tip if you want the details on what exactly is executed: Place code into babeljs.io
  */
