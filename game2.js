asteroidCount = 0;
class game2 extends Phaser.Scene {
    constructor(){
        super('game2');

    }
    create()
    {   this.add.image(320, 256, 'spaceBackground').setScale(1.5);
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
        if(game2points > 0){
            game2total =  Phaser.Math.RoundTo((game2points-game2time/2));
        }
        totalpoints = game2total + game1points;
        this.add.text(300, 150, "You got hit by a meteor!").setFontSize(50).setFill("#f0000f");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON TO GAME 3").setFontSize(30);
        this.add.text(780, 500, asteroidCount).setFontSize(30);
        this.add.text(650, 560, game2time).setFontSize(30);
        this.add.text(750, 620, game2total).setFontSize(30);
        this.add.text(675, 705, totalpoints).setFontSize(30);
        this.add.text(400, 500, "Asteroids Spawned:\n\nGame 2 time:\n\nTOTAL Level Score:\n\n\nTotal Points:",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('game3')
    });
    }
}
