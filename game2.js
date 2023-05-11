
class game2 extends Phaser.Scene {
    constructor(){
        super('game2');

    }
    create()
    {
        this.add.text(300, 150, "You have gotten hit by one of the circles!").setFontSize(50).setFill("#f0000f");
        this.cameras.main.setBackgroundColor(0x1D1923);
        this.player = this.physics.add.image(950, 950, 'ship')

        const { world } = this.physics;

        this.input.on('pointermove', pointer =>
        {
            this.player.x = pointer.worldX;
        });
        this.input.on('pointermove', pointer =>
        {
            this.player.x = pointer.worldX;
        });

        this.input.on('pointerdown', (pointer) => {
            // Create a laser sprite at the player's position
            const laser = this.physics.add.image(this.player.x, this.player.y, 'laser');

            // Set the velocity of the laser
            laser.setVelocity(0, -500); // Adjust the velocity as per your needs

            // Destroy the laser sprite when it goes out of bounds
            laser.setCollideWorldBounds(true);
            laser.body.onWorldBounds = true;
            this.physics.world.on('worldbounds', (body) => {
                if (body.gameObject === laser) {
                    laser.destroy();
                }
            });
        });

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
        this.add.text(300, 150, "You got hit by a meteor!").setFontSize(50).setFill("#f0000f");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON TO GAME 3").setFontSize(30)
        this.add.text(650, 500, game1points).setFontSize(30)
        this.add.text(650, 560, game1points).setFontSize(30)
        this.add.text(400, 500, "Game 1 score:\n\nGame 12 score:\n\nTOTAL Score:\n\n",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('game3')
    });
    }
}
