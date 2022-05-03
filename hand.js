class Hand{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 150;
        this.height = 120;
        this.x = 100;
        this.y = 100;


        this.img = new Image();
        this.img.src = '../images/hand.png';

    }

    init(){
        window.addEventListener("mousemove", ()=> {
            this.x = event.clientX - 150
            this.y = event.clientY - 90
        
        } ) //mouse position
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            this.x , 
            this.y ,
            this.width,
            this.height,
        );
    }
    
    collidesWith(object){
        return (
            this.x <= object.x + object.width &&
            this.x + this.width >= object.x &&  

            this.y <= object.y + object.height &&
            this.y + this.height >= object.y

        );
    }
}