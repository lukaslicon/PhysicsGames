class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
    }
    create() {
        this.add.text(535,150, "Out with the Bugs!").setFontSize(80);
        this.add.text(275, 400, "You are an exterminator and will need to get rid of all the bugs\n                   in this disgusting house...").setFontSize(35);
        this.add.text(525, 825, "Exterminate 15 bugs to finish your job.").setFontSize(35);
        this.add.text(775,950, "Click anywhere to begin.").setFontSize(20)
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('game1'));
        });
    }
}




class physicsGame1 extends Phaser.Scene {

}

class physicsGame2 extends Phaser.Scene {

}

class physicsGame3 extends Phaser.Scene {

}


class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload(){
    }
    create() {
        this.add.text(200, 150, "Congratulations you have exterminated all the bugs! \n\n       Your clients were happy for the day :)").setFontSize(50).setFill("#00ff00");
        this.add.text(750, 900, "Click anywhere to restart.").setFontSize(20)   
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
    scene: [Intro, game1, game2, game3, Outro],
    title: "Physics Based Games",
});