game1points = 0;
game2points = 0;
game2time = 0;
game2total = 0;
game3bounces = 0;
game3total = 0;
game3time = 0;
totalpoints = 0;
shotsTaken = 0;


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
        this.load.image('asteroid', 'images/asteroid.png');
        this.load.image('head', 'images/cannonhead.png');
        this.load.image('wheel', 'images/cannonwheel.png');
        this.load.image('basketball', 'images/basketball.png');
        this.load.image('bar', 'images/bar.png');
        this.load.image('hoop', 'images/hoop.png');
        this.load.image('spaceBackground', 'images/spaceBackground.png');
        this.load.image('court', 'images/court.png');



    }
    create()
    {
        this.scene.start('outro');
    }
}