const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const startScreen = new StartScreen(ctx);
const scoreScreen = new ScoreScreen(ctx);
const background = new Background(ctx);
const faces = new Faces(ctx);
const score = new Score(ctx);
const time = new Time(ctx);
const sound = new Sounds(ctx);
const hand = new Hand(ctx);


const startButton = document.getElementById('start-button');
startButton.addEventListener (
    'click',  () => {
        if(startButton.innerText === 'Start') {
            startButton.textContent = 'Pause';
            if (time.currentTime > 0) time.start() 
        } else if(startButton.innerText === 'Pause'){
            if(time.currentTime>0){
                startButton.innerText = 'Restart';
                game.stop();
            }
        } else if(startButton.innerText === 'Restart'){
            startButton.innerText = 'Pause';
            if (time.currentTime > 0) time.start()
            game.start()
            
        } 
        

         
        
    }
)



const game = new Game(ctx, hand, background, score, sound, faces, time, startScreen, scoreScreen, startButton);
window.onload = ()=>game.start()