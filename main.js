game1points = 0;
game2points = 0;
game3points = 0;
let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
    }
},
scene: [load, game1, intro,  outro],
title: "Physics Based Games",
};

let game = new Phaser.Game(config);