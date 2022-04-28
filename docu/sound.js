class Sounds {
    main= new Audio ("../sounds/gameSound.mp3");

        play(sounds) {
            this[sounds].play();

        }
        pause(sounds) {
            this[sounds].pause();
        }
    }
