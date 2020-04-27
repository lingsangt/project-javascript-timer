
  const durationInput = document.querySelector('#duration');
  const startButton = document.querySelector('#start');
  const pauseButton = document.querySelector('#pause');
  
  
  
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

