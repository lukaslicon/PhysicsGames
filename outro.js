
class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        let rect1 = new Phaser.Geom.Rectangle(275, 115, 1315, 5);
        let rect2 = new Phaser.Geom.Rectangle(275, 325, 1315, 5);
        let graphics1 = this.add.graphics({ fillStyle: { color: 0x00ff00 } });
        graphics1.fillRectShape(rect1);
        graphics1.fillRectShape(rect2);
        this.add.text(300, 150, "Congratulations you have completed all the \n\n       physics based challenges!").setFontSize(50).setFill("#00ff00");
        this.add.text(750, 800, "CLICK ANYWHERE TO RESTART").setFontSize(30)
        this.add.text(800, 500, "Game 1 score:\n\nGame 2 score:\n\nGame 3 score:\n\nTOTAL Score:\n\n").setFontSize(30)
        this.add.text(1075, 502, game1points).setFontSize(30)
        this.add.text(1075, 560, game2total).setFontSize(30);
        this.add.text(1075, 618, game3total).setFontSize(30);
        this.add.text(1075, 676, totalpoints).setFontSize(30);
    


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
