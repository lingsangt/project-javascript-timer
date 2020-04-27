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
    Babel shows that this function will be executed inside of the constructor,
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    start =() => {

        //we want tick to be called the first time immediately the user clicks the button
        this.tick ();

        //run tick every second, starting 1 second after the user clicks the button
        setInterval (this.tick, 1000);

        /*
        note that setInterval returns an integer. If you want to stop it, you can 
        const timer = setInterval (this.tick, 1000);
        clearInterval (timer);

        we use this idea for the pause method, but we would need the 'timer' variable to carry over 
        to the pause method, so we use 'this.timer' instead.
        */
    }
    pause = () => {
        clearInterval ();
    }


    /*tick is called inside the start function, so
    use arrow function so using 'this' inside the function refers to the same instance of the class.
    */
    tick = () => {
        console.log ('tick');
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
