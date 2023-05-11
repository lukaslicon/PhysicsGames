
class game3 extends Phaser.Scene {
    constructor(){
        super('game3');
    }
    create()
    {

        //player rectangle
        this.player = this.physics.add.image(400, 300, 'bob').setScale(.75);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player.body.setCollideWorldBounds(true); //player cannot go out of bounds

        //sprites
        const sprite = this.physics.add.image(400, 300, 'ball')
            .setVelocity(288, 300)
            .setBounce(1, 1.05)
            .setCollideWorldBounds(true)
            .setGravityY(100);

        const sprite2 = this.physics.add.image(400, 300, 'ball')
            .setVelocity(400, 400)
            .setBounce(1, 1.01)
            .setCollideWorldBounds(true)
            .setGravityY(100);
        sprite.body.onCollide = true;
        sprite2.body.onCollide = true;

        //this.physics.add.collider(this.sprite2, this.group);

        this.coins = this.physics.add.group({ immovable: true });
        const outer = new Phaser.Geom.Rectangle(50, 50, 1800, 1200);
        const inner = new Phaser.Geom.Rectangle(800, 300, 500, 200);
        for (let i = 0; i < 60; i++)
        {
            const point = Phaser.Geom.Rectangle.RandomOutside(outer, inner);
            const coins = this.coins.create(point.x, point.y, 'coin');
            this.physics.add.existing(coins);
            coins.body.setImmovable();
        }
        //controls
        this.add.text(100, 100, "Movement: Arrow Keys\n\nDont get hit!").setFontSize(30)

        this.physics.add.collider(this.player, [sprite, sprite2], () => {
            this.scene.start('summary1');
        });

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

        this.physics.overlap(this.player, this.coins, (player, coins) =>
        {
            coins.destroy();
            game1points++;
        });
        }
    }

    
class summary3 extends Phaser.Scene {
    constructor() {
        super('summary3');
    }
    create(){
        this.add.text(300, 150, "You have gotten hit by one of the circles!").setFontSize(50).setFill("#f0000f");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON TO GAME 2").setFontSize(30)
        this.add.text(650, 500, game1points).setFontSize(30)
        this.add.text(650, 560, game1points).setFontSize(30)
        this.add.text(400, 500, "Game 1 score:\n\nTOTAL Score:\n\n",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('outro')
    });
    }
}
