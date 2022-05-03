class Sounds {
    main= new Audio ("../sounds/gameSound.mp3");

        play(sounds) {
            this[sounds].play();

        }
        pause(sounds) {
            this[sounds].pause();
        }
        
        slap = new Audio ("../sounds/slap.mp3")
        startScreen = new Audio ("../sounds/Niko.mp3")
        highScore = new Audio ("../sounds/High.mp3")
    }
