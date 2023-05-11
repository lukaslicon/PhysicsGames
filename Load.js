class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';
        this.load.image('ball', 'images/ball.png');
    }
    create()
    {
        this.scene.start('game1');
    }
}