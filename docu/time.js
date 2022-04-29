class Time {
    constructor() {
      
      this.ctx = ctx
      this.x = 50
      this.y = 100
     
      this.currentTime = 60,
      this.intervalId = null
      this.running = false
    }
  
    start() {
      this.intervalId = setInterval(()=>{
        this.currentTime -= 1
        if (this.currentTime === 0) {
            this.stop();
        }
       },1 * 1000)
       this.running = true
 };

  init(){
    this.currentTime = 5
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
      this.intervalId = null
      this.running = false
    }
  
    reset() {
      this.currentTime = 60
    }
  
}