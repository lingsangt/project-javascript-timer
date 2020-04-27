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
        
        /*

        */
        const timeRemaining = parseFloat (this.durationInput.value);
        this.durationInput.value = timeRemaining -1;

    }


  }
  
  const durationInput = document.querySelector('#duration');
  const startButton = document.querySelector('#start');
  const pauseButton = document.querySelector('#pause');
  
  const timer = new Timer(durationInput, startButton, pauseButton);
  
/*
Part 1: The timer starts, pauses, and responds to user changing time duration. The data is stored in DOM elements.


Note on 'this': If we called timer.start () directly, this creates a different instance than 
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


Note on timer option #2: Current time sits in input element. 
This is known as storing our data inside DOM. Our application has some critical data that is required to 
make it work correctly and we are storing that data inside of different DOM elements. 
(Option #1 was storing all of our data inside of the javascript code. It is more popular these days.). 
Option #2 makes it easier when actually implementing responding to user activity. 
We are going with option #2 this time just so we can see the downsides. 

*/
