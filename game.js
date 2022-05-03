class Game {
    constructor(ctx, hand, background, score, sound, faces, time, startScreen, scoreScreen,startButton) {
        this.ctx = ctx
        this.hand = hand
        this.background = background
        this.score = score
        this.sound = sound
        this.faces = faces
        this.time = time
        this.frameNumber = null 
        this.mouseX = 0
        this.mouseY = 0
        this.screen = 0
        this.startScreen = startScreen
        this.scoreScreen = scoreScreen
        this.startButton = startButton


            document.addEventListener("click",() =>  this.checkCollisions()) 



    }

    start() {
        //this.init()
        //this.frameNumber = window.requestAnimationFrame(this.play.bind(this))
        
        switch (this.screen) {
              case 0:
                this.startScreen.init();
                this.startScreen.draw()
                this.startButton.classList.add('hidden')
                this.sound.pause("main")
                this.sound.play("startScreen")
                document.addEventListener('keydown', (e)=>{
                    if(e.code === 'Space') {
                        this.screen++;
                        this.start();
                    }
                })
                break;
              case 1:
                this.init();
                this.frameNumber = window.requestAnimationFrame(this.play.bind(this));
                this.startButton.classList.remove('hidden')
                this.sound.pause("startScreen")

                break;
              case 2:
                this.scoreScreen.init();
                this.scoreScreen.draw();
                this.startButton.classList.add('hidden')
                this.sound.pause("main")
                this.sound.pause("startScreen")
                this.sound.play("highScore")
                this.score.draw()
                
                break;
              default:
                console.log("This screen code is unknown!");
        }
    }

    init() {
        this.frameNumber = null;
        this.background.init();
        this.time.init();
        this.score.init();
        this.hand.init();
        this.faces.init();
    }

    play() {
        this.move();
        this.draw();
        this.sound.play("main")

        if (this.frameNumber !== null) { 
            this.frameNumber = requestAnimationFrame(this.play.bind(this)); 
        }
        if (this.time.currentTime === 0) {
            this.stop();
            this.screen++;
            this.start();
        }
    }

    move() {
        if(this.time.running) {
            this.faces.move(this.frameNumber)
        };
    }

    

    draw() {
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.faces.draw();
        this.hand.draw(this.frameNumber);
        this.score.draw();
        this.time.draw();
        // this."""xxxx"".draw();  sound??
    }

    stop(){
        this.time.stop()
        this.sound.pause("main")
        window.cancelAnimationFrame(this.frameNumber);

    }

    checkCollisions() {
        
        let collisions = false;
            
            this.faces.faces.forEach((face) => {
                if (this.hand.collidesWith(face)) this.destroyEnemies(face)
            }) 

            return collisions;
    }

    destroyEnemies(face){
        this.faces.faces.splice(this.faces.faces.indexOf(face),1) 
        this.score.addPoint()
        this.sound.play("slap")
    
    }

}
