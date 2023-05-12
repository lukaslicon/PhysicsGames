asteroidCount = 0;
class game2 extends Phaser.Scene {
    constructor(){
        super('game2');

    }
    create()
    {   
        this.add.image(960, 540, 'spaceBackground');
        this.add.text(300, 150, "Dodge the asteroids for as long as you can!").setFontSize(50).setFill("#f0000f");
        this.player = this.physics.add.image(950, 950, 'ship')
        const { world } = this.physics;

        this.input.on('pointermove', pointer =>
        {
            this.player.x = pointer.worldX;
            this.player.y = pointer.worldY;
        });
        this.asteroids = this.physics.add.group();

        //asteroids
        const spawnDelay = 300; 
        const initialSpeed = 200; 
        const acceleration = 50; 
        let nextSpawnTime = 0; 


        this.physics.add.collider(this.player, this.asteroids, () => {
            this.scene.start('summary2'); //player collides with an asteroid
        });

        this.time.addEvent({
            delay: spawnDelay,
            loop: true,
            callback: () => {
                if (this.time.now > nextSpawnTime) {
                    const asteroid = this.asteroids.create(
                        Phaser.Math.Between(50, this.cameras.main.width - 50),
                        -50,
                        'asteroid'
                    );
                    game2points = game2points + .4;
                    asteroidCount++;
                    asteroid.setVelocity(0, initialSpeed);
                    asteroid.body.setCircle(48);
                    nextSpawnTime = spawnDelay - 40;

                    // Increase speed of asteroids falling down over time
                    this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            asteroid.setVelocityY(asteroid.body.velocity.y + acceleration);
                        },
                        loop: true
                    });
                    // Delete the asteroid and increment game2points when it goes out of the camera
                    this.physics.world.on('worldbounds', (body) => {
                        if (body.gameObject === asteroid) {
                            asteroid.destroy();
                        }
                    });
                }

                
            }
        });

    this.time.addEvent({
        delay: 1000, // Update the time every second
        loop: true,
        callback: () => {
            game2time++; // Increment the elapsed time
            }
        });

    }

}

    
class summary2 extends Phaser.Scene {
    constructor() {
        super('summary2');
    }
    create(){
        this.add.image(960,540 , 'summaryScreen');
        if(game2points > 0){
            game2total =  Phaser.Math.RoundTo((game2points-game2time/2));
        }
        totalpoints = game2total + game1points;
        const text = this.add.text(500, 175, "Oh No! You got hit by a meteor!").setFontSize(50).setFill("#f0000f");
        this.tweens.add({
            targets: text,
            scaleX: 1.05,
            scaleY: 1.4,
            duration: 1000,
            yoyo: true,
            repeat: -1
        });
        const moveText = this.add.text(650, 900, "CLICK ANYWHERE TO MOVE ON TO GAME 3").setFontSize(30).setFill("#000ff0");
        this.tweens.add({
            targets: moveText,
            scaleY: 1.3,
            duration: 1000,
            yoyo: true,
            repeat: -1
        });
        this.add.text(1130, 400, asteroidCount).setFontSize(30);
        this.add.text(100, 750, "Game 3: Make the basketball in the hoop using the paddle. Are you good at shooting?").setFontSize(35).setFill("#f0f00f");
        this.add.text(1000, 460, game2time).setFontSize(30);
        this.add.text(1100, 520, game2total).setFontSize(30);
        this.add.text(1025, 605, totalpoints).setFontSize(30);
        this.add.text(750, 400, "Asteroids Spawned:\n\nGame 2 time:\n\nTOTAL Level Score:\n\n\nTotal Points:",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('game3')
    });
    }
}
