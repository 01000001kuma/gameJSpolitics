    class Faces {
        constructor(ctx) {
            this.ctx = ctx
            this.faces = [] 
            this.splash = []   
            this.vxEnemy = -6  
            this.spawnRateEnemy = 100
            this.x = 100
            this.y = 100
            this.pictures = ["../images/Puig.png", "../images/rajoy.png", "../images/aznar.png", "../images/abascal.png", "../images/perro.png", "../images/albert.png"]
    
        }
    
        init() {
            this.faces = [];
            this.vxEnemy = -56;
            this.spawnRateEnemy = 100
            // const newEnemy = {
            //     sprite: new Image(),
    
            //     y: this.ctx.canvas.height/2,
            //     x: this.ctx.canvas.width/2,
    
            //     width: 80,
            //     height: 70,
            //     vx: 7 //this.vxEnemy
            // }
            // newEnemy.sprite.src = "../images/perro.png"
            // this.faces.push(newEnemy)
            
        }

        // newEnemy{}

        //randomMove{}
    
        move(frameNumber) {  
            
            //on high axi
            if(frameNumber%40 === 0){
                console.log("newEnemy", this.faces)
                const x =  338 + Math.floor(Math.random() * (1220-338))
                const y =  125 + Math.floor(Math.random() * (550-125))
                const vx = Math.floor(Math.random() * 3)         
                const vy = Math.floor(Math.random() * 3)

                const newEnemy = {
                    sprite: new Image(),
                    y,
                    x,        
                    width: 100,
                    height: 90,
                    vx,
                    vy
                }
                newEnemy.sprite.src = this.pictures[Math.floor(Math.random() * this.pictures.length)]
                this.faces.push(newEnemy)
            }
    
            this.faces.forEach(enemy => {
                enemy.x += enemy.vx
                enemy.y += enemy.vy
            })
        }
    
        removeWhenOutOfScreen(array) {
            const newArray = array.filter((value, index, arr) => {
                return value.x > 0 - value.width
            })
            return newArray
        }
    
        //spawnNewEnemy(position)
            
    
 
    
        draw() {
            this.faces.forEach(
                face => {
                    this.ctx.drawImage(
                        face.sprite,
                        face.x,
                        face.y,
                        face.width,
                        face.height
                    )
                }
            )

    }
};