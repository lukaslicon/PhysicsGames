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