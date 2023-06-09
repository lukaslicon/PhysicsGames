
class game1 extends Phaser.Scene {
    constructor(){
        super('game1');
    }
    create()
    {
        this.add.image(960, 540, 'background1');
        //player rectangle
        this.player = this.physics.add.image(400, 300, 'bob').setScale(.75);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player.body.setCollideWorldBounds(true); //player cannot go out of bounds

        //sprites
        const sprite = this.physics.add.image(400, 300, 'ball')
            .setVelocity(288, 300)
            .setBounce(1, 1.08)
            .setCollideWorldBounds(true)
            .setGravityY(100);

        const sprite2 = this.physics.add.image(400, 300, 'ball')
            .setVelocity(400, 400)
            .setBounce(1, 1.02)
            .setCollideWorldBounds(true)
            .setGravityY(100);
        
        sprite.body.onCollide = true;
        sprite.body.setCircle(48);
        sprite2.body.onCollide = true;
        sprite2.body.setCircle(48);

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
        this.add.text(50, 50, "Movement: Arrow Keys\n\nDont get hit!").setFontSize(30)

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

    
class summary1 extends Phaser.Scene {
    constructor() {
        super('summary1');
    }
    create(){
        this.add.image(960,540 , 'summaryScreen');
        this.add.text(300, 150, "You have gotten hit by one of the circles!").setFontSize(50).setFill("#f0000f");
        this.add.text(150, 500, "Game 2: Dodge asteroids using your mouse to stay alive for as long as you can!").setFontSize(35).setFill("#f0f00f");
        const text = this.add.text(650, 700, "CLICK ANYWHERE TO MOVE ON TO GAME 2").setFontSize(30).setFill("#000ff0");
        this.tweens.add({
            targets: text,
            scaleY: 1.3,
            duration: 1000,
            yoyo: true,
            repeat: -1
        });
        this.add.text(1075, 300, game1points).setFontSize(30)
        this.add.text(1075, 360, game1points).setFontSize(30)
        this.add.text(825, 300, "Game 1 score:\n\nTOTAL Score:\n\n",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('game2')
    });
    }
}
