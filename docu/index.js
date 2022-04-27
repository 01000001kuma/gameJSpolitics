const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const background = new Background(ctx);
const faces = new Faces(ctx);
const score = new Score(ctx);
const time = new Time(ctx);
const sound = new Sound(ctx);
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
                time.stop();
            }
        } else if(startButton.innerText === 'Restart'){
            startButton.innerText = 'Pause';
            if (time.currentTime > 0) time.start() 
        }
        
        
    }
)



const game = new Game(ctx, hand, background, score, sound, faces, time);
window.onload = ()=>game.start()