class physicsGame1 extends Phaser.Scene {

}

class physicsGame2 extends Phaser.Scene {

}

class physicsGame3 extends Phaser.Scene {

}
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, game1, game2, game3, Outro],
    title: "Physics Based Games",
});