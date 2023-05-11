
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Scene1, Scene2, Scene3, Scene4, Outro1, Outro2],
    //scene: [Scene1, Intro, Scene2, Scene3, Scene4, Outro1, Outro2],
    //scene: [Scene2, Intro, Scene1, Scene3, Scene4,  Outro1, Outro2],
    //scene: [Scene3, Intro, Scene1, Scene2, Scene4,  Outro1, Outro2],
    //scene: [Scene4, Intro, Scene1, Scene2, Scene3,  Outro1, Outro2],
    //scene: [ Outro1, Scene4, Intro, Scene1, Scene2, Scene3,  Outro2],
    //scene: [ Outro2, Scene4, Intro, Scene1, Scene2, Scene3,  Outro1],
    title: "Adventure Game",
});