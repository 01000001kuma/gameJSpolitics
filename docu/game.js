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
        this.frameNumber = window.requestAnimationFrame(this.play.bind(this))
    }

    init() {

        this.frameNumber = null;
        this.background.init();
        this.time.init();
        this.score.init();
        this.hand.init();
    }

    play() {
        this.move();
        this.draw();
        if (this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }

    }

    move() {
        this.faces.move(this.mouseY, this.frameNumber);
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

    checkCollitions() {


    }


}