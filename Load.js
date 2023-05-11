game1points = 0;
game2points = 0;
game3points = 0;
class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';
        this.load.image('ball', 'images/ball.png');
        this.load.image('coin', 'images/coin.png');
        this.load.image('bob', 'images/bob.png');
        this.load.image('ship', 'images/spaceship.png');
        this.load.image('laser', 'images/laser.png');

    }
    create()
    {
        this.scene.start('game2');
    }
}