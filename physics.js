



class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
    }
    create() {
        this.add.text(150,150, "Welcome to my Physics Based Games!").setFontSize(80);
        let rect1 = new Phaser.Geom.Rectangle(125, 140, 1675, 5);
        let rect2 = new Phaser.Geom.Rectangle(125, 230, 1675, 5);
        let graphics1 = this.add.graphics({ fillStyle: { color: 0xf0000f } });
        graphics1.fillRectShape(rect1);
        graphics1.fillRectShape(rect2);
        this.add.text(150, 400, "            You are tasked to complete 3 physics based games...\n\nEach games has a different style of gameplay and different physics implemented.").setFontSize(35);
        this.add.text(250, 750, "Game 1: Do not get hit by the ball! Collect as many points as you can by moving around the screen.").setFontSize(25).setFill('#00ffff');
        this.add.text(725,850, "Click anywhere to begin.").setFontSize(30).setFill('#f0000f');
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outro'));
        });
    }
}



class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload(){
    }
    create() {
        this.add.text(300, 150, "Congratulations you have completed all the \n\n       physics based challenges!").setFontSize(50).setFill("#00ff00");
        this.add.text(750, 900, "Click anywhere to restart.").setFontSize(20)
        this.add.text(400, 500, "Game 1 score:\n\nGame 2 score:\n\nGame 3 score:\n\nTOTAL Score:\n\n").setFontSize(30)
            this.input.on('pointerdown', () => {
                this.scene.start('intro')
    });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [intro, outro],
    title: "Physics Based Games",
});