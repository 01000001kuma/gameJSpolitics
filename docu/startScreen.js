class StartScreen {
    constructor(ctx) {
        this.ctx = ctx
        this.sound = null
        this.backgroundImage = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0

        }
        this.backgroundImage.img.src = "../images/1.png"

    }

    init() {
        this.backgroundImage.x = 0;
        this.backgroundImage.y = 0;
        //this.sound.play("startScreen")
        console.log('hi')
    }

    draw(frameNumber) {
        this.ctx.drawImage( // drawImage(image, x-axis coordinate where to place the top-left corner of the image, y-axis coordinate ...)
            this.backgroundImage.img,
            this.backgroundImage.x,
            this.backgroundImage.y,
            this.backgroundImage.width,
            this.backgroundImage.height
        )
    }
}