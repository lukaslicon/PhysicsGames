
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false
    }
},
scene: [physicsGame1, intro, outro],
title: "Physics Based Games",
};

const game = new Phaser.Game(config);