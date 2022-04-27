class Game {
    constructor(ctx, hand, background, score, sound, faces, time) {
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
        
    
    }

    start() {
        this.init()
        this.play()
    }


    stop() {        //  pause, restart button
        
    }

    init() {

        this.frameNumber = 0;
        this.hand.init();
        this.time.init();
        this.score.init();
        this.background.init();
    }

    play() {
        this.move();
        this.draw();
        this.sendFrameNumber(this.faces);


        if (this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }

    }

    sendFrameNumber(object) {
        object.frameNumber = this.frameNumber
    }

    move() {
        this.faces.move(this.mouseY, this.frameNumber);
    }

    draw() {
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.hand.draw(this.frameNumber);
        this.faces.draw();
        this.score.draw();
        this.time.draw();
        // this."""xxxx"".draw();  sound??
    }

    checkCollitions() {


    }


}