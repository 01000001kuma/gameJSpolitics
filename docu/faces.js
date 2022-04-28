    class Faces {
        constructor(ctx) {
            this.ctx = ctx
            this.faces = [] 
            this.splash = []   
            this.vxEnemy = -6  
            this.spawnRateEnemy = 100
            this.x = 100
            this.y = 100
    
        }
    
        init() {
            this.faces = [];
            this.vxEnemy = -56;
            this.spawnRateEnemy = 100
            const newEnemy = {
                sprite: new Image(),
    
                y: this.ctx.canvas.height/2,
                x: this.ctx.canvas.width/2,
    
                width: 80,
                height: 70,
                vx: 7 //this.vxEnemy
            }
            newEnemy.sprite.src = "../images/perro.png"
            this.faces.push(newEnemy)
            
        }
    
        move(frameNumber) {  
            
            //on high axi
            if(frameNumber%500 === 0){
                const x =  200 + Math.floor(Math.random() * 600)
                const y =  200 + Math.floor(Math.random() * 600)
                const vx = Math.floor(Math.random() * 2)         
                const vy = Math.floor(Math.random() * 2)

                const newEnemy = {
                    sprite: new Image(),
                    y,
                    x,        
                    width: 80,
                    height: 70,
                    vx,
                    vy
                }
                newEnemy.sprite.src = "../images/perro.png"
                this.faces.push()
            }
    
            this.faces.forEach(enemy => {
                enemy.x += enemy.vx
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