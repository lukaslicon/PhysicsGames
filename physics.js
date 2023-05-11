//scene1
class physicsGame1 extends Phaser.Scene {
    constructor(){
        super("game1", "Game #1",);
    }
    preload ()
    {
        this.load.image('ball', 'assets/images/ball.png');
    }
    create ()
    {
        this.player = this.add.rectangle(400, 300, 64, 64, 0xffffff);

        this.physics.add.existing(this.player, false);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player.body.setCollideWorldBounds(true);
        this.sprite = this.physics.add.image(400, 300, 'ball');
        this.sprite2 = this.physics.add.image(400, 300, 'ball');

        /*this.group = this.physics.add.staticGroup({
            key: 'ball',
            frameQuantity: 60
        });

        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), new Phaser.Geom.Rectangle(0, 0, 1920, 1080));
        this.group.refresh();
        */
        this.sprite.setVelocity(288, 300).setBounce(1, 1.05).setCollideWorldBounds(true).setGravityY(100);
        this.sprite2.setVelocity(400, 400).setBounce(1, 1.01).setCollideWorldBounds(true).setGravityY(100);
        //this.physics.add.collider(this.sprite, this.group);
        //this.physics.add.collider(this.sprite2, this.group);
    }
    update ()
    {
        this.player.body.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(300);
        }
    }
}

class physicsGame extends Phaser.Scene {
    constructor(key, name) {
        super(key);
        this.name = name;

    }


}




//intro

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
            this.time.delayedCall(1000, () => this.scene.start('game1'));
        });
    }
}

//outro

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


const config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        physics:{
            default: 'arcade',
            arcade: {
                debug: true
        }
    },
    scene: [physicsGame1, intro, outro],
    title: "Physics Based Games",
};

const game = new Phaser.Game(config);