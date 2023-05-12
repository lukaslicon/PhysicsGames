
shotsTaken = 0;
class game3 extends Phaser.Scene {
    constructor(){
        super('game3');
    }
    create()
    {
        this.cameras.main.setBackgroundColor('#f00f00');

        this.add.text(200, 50, "Try to make all three hoops as fast as possible without missing!\n                 Less misses means more points!").setFontSize(40).setFill("#ffffff");

        const cannon = this.add.image(190, 950, 'head').setDepth(1);
        this.add.image(160, 1015, 'wheel').setDepth(1);

        let angle = 0;
        this.input.on('pointermove', (pointer) =>
        {
            angle = Phaser.Math.Angle.BetweenPoints(cannon, pointer)+.5;
            cannon.rotation = angle;
            graphics.clear().strokeLineShape(line);
        });
        this.input.on('pointerdown', () =>
        {
            shotsTaken++;
            const balls = this.physics.add.image(cannon.x, cannon.y, 'basketball');
            balls.setScale(0.4);
            balls.setOrigin(0.5);
            this.physics.velocityFromRotation(angle-.5, 600, balls.body.velocity);
            balls.body.gravity.y = 150;

             // Enable ball-body collision with the world bounds
            balls.body.collideWorldBounds = true;
            // Set the ground as the only collision object for the ball
            balls.body.bounce.set(1);
            balls.body.onWorldBounds = true;
            this.time.delayedCall(8000, () => {
                balls.destroy();
                
            });
        });

        this.physics.world.on('worldbounds', (body) => {
            if (body.gameObject.texture.key === 'basketball') {
                // Reverse the vertical velocity to make the ball bounce
                body.velocity.y *= .5;
            }
        });

                // Add three circles on the right side of the view
                const circleRadius = 50;
                const circle1 = this.add.circle(1865, 245, circleRadius, 0xffffff);
                const circle2 = this.add.circle(1865, 545, circleRadius, 0xffffff);
                const circle3 = this.add.circle(1865, 845, circleRadius, 0xffffff);

                let rect1 = new Phaser.Geom.Rectangle(1700, 300, 215, 20);
                let rect2 = new Phaser.Geom.Rectangle(1700, 600, 215, 20);
                let rect3 = new Phaser.Geom.Rectangle(1700, 900, 215, 20);
                let graphicsRec = this.add.graphics({ fillStyle: { color: 0xffffff } });
                graphicsRec.fillRectShape(rect1);
                graphicsRec.fillRectShape(rect2);
                graphicsRec.fillRectShape(rect3);

    }
}

class summary3 extends Phaser.Scene {
    constructor() {
        super('summary3');
    }
    create(){
        this.add.text(300, 150, "You have gotten hit by one of the circles!").setFontSize(50).setFill("#f0000f");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON TO GAME 2").setFontSize(30)
        this.add.text(780, 500, game3points).setFontSize(30);
        this.add.text(650, 560, game3time).setFontSize(30);
        this.add.text(750, 620, game2total).setFontSize(30);
        this.add.text(675, 705, totalpoints).setFontSize(30);
        this.add.text(400, 500, "Asteroids Spawned:\n\nGame 2 time:\n\nTOTAL Level Score:\n\n\nTotal Points:",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('outro')
    });
    }
}
