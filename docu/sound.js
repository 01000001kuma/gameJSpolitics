class Sound {
    constructor(){
        this.theme = new Audio("../sounds/gameSound.mp3")
        this.slap = new Audio("../sounds/slap.mp3")
        
    }
    play(sound){
        sound.play()
    }
}

