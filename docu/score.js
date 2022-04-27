class Score {
    constructor(ctx) {
        this.ctx = ctx
        this.score = 0

        this.x = 1220
        this.y = 100
    }

    init() {
        this.score = 0
    }

    draw() {
        this.ctx.font = "bold 50px 'Roboto Mono'";
        this.ctx.fillStyle = ""
        this.ctx.fillText(`Score: ${this.score.toString()}`, this.x, this.y);
    }

    addPoint() {
        this.score+=235
    }
}