const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const background = new Background(ctx);
const faces = new Faces(ctx);
const score = new Score(ctx);
const time = new Time(ctx);
const sound = new Sound(ctx);
const hand = new Hand(ctx);


const game = new Game(ctx, hand, background, score, sound, faces, time);



game.start()