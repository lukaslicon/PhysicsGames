
class game2 extends Phaser.Scene {
    constructor(){
        super('game2');
    }
    create()
    {
        this.add.text(300, 150, "You have gotten hit by one of the circles!").setFontSize(50).setFill("#f0000f");
        this.cameras.main.setBackgroundColor(0x1D1923);
    }
    update ()
    {

    }
}

    
class summary2 extends Phaser.Scene {
    constructor() {
        super('summary2');
    }
    create(){
        this.add.text(300, 150, "You have gotten hit by one of the circles!").setFontSize(50).setFill("#f0000f");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON TO GAME 2").setFontSize(30)
        this.add.text(650, 500, game1points).setFontSize(30)
        this.add.text(650, 560, game1points).setFontSize(30)
        this.add.text(400, 500, "Game 1 score:\n\nTOTAL Score:\n\n",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('game3')
    });
    }
}
