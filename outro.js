
class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(300, 150, "Congratulations you have completed all the \n\n       physics based challenges!").setFontSize(50).setFill("#00ff00");
        this.add.text(750, 900, "Click anywhere to restart.").setFontSize(20)
        this.add.text(400, 500, "Game 1 score:\n\nGame 2 score:\n\nGame 3 score:\n\nTOTAL Score:\n\n").setFontSize(30)
        this.add.text(675, 502, game1points).setFontSize(30)
        this.add.text(675, 560, game2total).setFontSize(30);
        this.add.text(675, 618, game3total).setFontSize(30);
        this.add.text(675, 676, totalpoints).setFontSize(30);
    
            this.input.on('pointerdown', () => {
                game1points = 0;
                game2points = 0;
                game2time = 0;
                game2total = 0;
                game3bounces = 0;
                game3total = 0;
                game3time = 0;
                totalpoints = 0;
                shotsTaken = 0;
                this.scene.start('intro')
    });
    }
}
