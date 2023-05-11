
class game1 extends Phaser.Scene {
    constructor(){
        super('game1');
    }
    create()
    {
        //control text
        this.add.text(100, 100, "Movement:WASD\n\nSCORE:\n\nDont get hit!").setFontSize(30)
        //player rectangle
        this.player = this.add.rectangle(400, 300, 64, 64, 0xffffff);
        this.physics.add.existing(this.player, false);
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
