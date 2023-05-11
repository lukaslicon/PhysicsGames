
class game1 extends Phaser.Scene {
    constructor(){
        super('game1');
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

        this.physics.add.collider(sprite, this.player);
        this.physics.add.collider(sprite2, this.player);
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
        this.add.text(100, 100, "Movement:WASD\n\nSCORE:\n\nDont get hit!").setFontSize(30)
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
        });


    }
    }
