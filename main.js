
let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowVelocity: false
    }
},
//scene: [load, intro, game1, summary1, game2, summary2, game3, summary3, outro],
scene: [load, intro, game1, summary1, game2, summary2,  game3, summary3, outro],
title: "Physics Based Games",
};

let game = new Phaser.Game(config);