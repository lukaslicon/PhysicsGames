
let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
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