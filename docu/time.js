class Time {
    constructor() {
      
      this.ctx = ctx
      this.x = 50
      this.y = 100
     
      this.currentTime = 60,
      this.intervalId = null
    }
  
    start() {
      this.intervalId = setInterval(()=>{
        this.currentTime -= 1
        if (this.currentTime === 0) {
            this.stop();
        }
    },1 * 1000)
 };

  init(){
    this.currentTime = 60
  }

  draw(){
    this.ctx.font = "bold 50px 'Roboto Mono'";
    this.ctx.fillStyle = "white"
    this.ctx.fillText(`Time: ${this.currentTime.toString()}`, this.x, this.y);
  }

 computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)
     }
  
    stop() {
      clearInterval(this.intervalId)
    }
  
    reset() {
      this.currentTime = 60
    }
  
}