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

