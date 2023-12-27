var fire = document.getElementById('fire');
var buttons = document.getElementsByClassName('button');

var pause = document.getElementById('pause');
var mute = document.getElementById('mute');
var end = document.getElementById('end');
//creating variables for the buttons i am interrested in 
for(var i =0; i<buttons.length;i++){
buttons[i].addEventListener('click', function(event) {
        var clickedButton = event.target;
        
       
            // Use a switch statement to determine the mood that will play based on the button clicked
            switch (clickedButton.id) {
                case 'fire':
                    playMood("/vids/fire2.mp4");
                    break;
                case 'rain':
                    playMood("/vids/rain.mp4");
                    break;
                case 'jungle':
                    playMood("/vids/jungle2.mp4");
                    break;
                case 'party':
                    playMood("/vids/party2.mp4");
                    break;
                case 'beach':
                    playMood("/vids/beach2.mp4");
                    break;
                case 'relax':
                    playMood("/vids/relax2.mp4");
                    break;
                }
            

    });
}
//adding an event listener that sends a different video to the background depending on the button id

document.addEventListener('keypress', function(event) {
    var key = event.key.toLowerCase();
    console.log(key);
    switch (key) {
        case 'f':
            playMood("/vids/fire2.mp4");
            break;
        case 'r':
            playMood("/vids/rain.mp4");
            break;
        case 'j':
            playMood("/vids/jungle2.mp4");
            break;
        case 'p':
            playMood("/vids/party2.mp4");
            break;
        case 'b':
            playMood("/vids/beach2.mp4");
            break;
        case 'c':
            playMood("/vids/relax2.mp4");
            break;
        }
    });
//event listener for keypresses

pause.addEventListener('click', function(){
    pausePlay();
});
//simple only for pause mute and end button
mute.addEventListener('click', function(){
    muteb();
});

end.addEventListener('click', function(){
    stop();
});

function playMood(link) {
    var video = document.getElementById('vid');
    video.style.opacity = 0;
    var icons = document.getElementsByClassName('button');
    for (var i=0;i<icons.length;i++){
        
        icons[i].style.opacity = 0.5;
    
    }

    console.log(link);  
    setTimeout(function () {
    video.src= link;
    video.load();
    video.style.opacity = 1;
    },2000);
}
//replaces the src for the video and lower the buttons opacity 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', handleHover);
}
//when hovering over a mood button alll the buttons opacity goes up to 1 
function handleHover() {
    const buttons = document.getElementsByClassName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.opacity = 1;
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseout', handlenotHover);
}
//the opposit of the mouse over function
function handlenotHover() {
    const buttons = document.getElementsByClassName('button');
        var vid = document.getElementById('vid');
        var source = vid.src;
        console.log(source);
    if ((source.includes('WAIT'))==false){//disables the low opacity if there is no video playing

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.opacity = 0.5;
    }
}
}





function pausePlay(){
    var video = document.getElementById('vid');
    if (video.paused) {
        video.play();
        pause.style.backgroundImage = 'url(./imaged/pause.png)'; 
    } else {
        video.pause();
        pause.style.backgroundImage = 'url(./imaged/play.png)'; 
    }
}
//pauses and plays the video
function muteb() {
    var video = document.getElementById('vid'); 
    
    if (video.muted) {
        video.muted = false;
        mute.style.backgroundImage = 'url(./imaged/unmute2.png)'; 
    } else {
        video.muted = true;
        mute.style.backgroundImage = 'url(./imaged/muted2.png)'; 
    }
}
//mutes and unmutes 

function stop(){
    
    var video = document.getElementById('vid');
    var icons = document.getElementsByClassName('button');
    video.src="WAIT";
    for (var i=0;i<icons.length;i++){
        icons[i].style.opacity = 1;
    }
}
//ends the video

function playRand() {
    // Array of button IDs to choose from
    const buttonIds = ['rain', 'fire', 'jungle', 'beach', 'relax', 'party'];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * buttonIds.length);

    // Get the button element by ID
    const buttonElement = document.getElementById(buttonIds[randomIndex]);

    // Check if the button element exists before simulating the click
    if (buttonElement) {
        // Creating a MouseEvent for a 'click' event
        const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

        // Dispatch the event to simulate the click
        buttonElement.dispatchEvent(clickEvent);
    }
}
//random mood


