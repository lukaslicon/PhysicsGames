
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
            balls.body.setCircle(80);
             // Enable ball-body collision with the world bounds
            balls.body.collideWorldBounds = true;
            // Set the ground as the only collision object for the ball
            balls.body.bounce.set(1);
            balls.body.onWorldBounds = true;
            this.time.delayedCall(8000, () => {
                balls.destroy();

            });
            
            // Add collision between ball and bar images
            this.physics.add.collider(balls, [bar1, bar2, bar3]);
        });

        this.physics.world.on('worldbounds', (body) => {
            if (body.gameObject.texture.key === 'basketball') {
                // Reverse the vertical velocity to make the ball bounce
                body.velocity.y *= .5;
            }
        });

                // Add three circles on the right side of the view
                let hoop1 = this.physics.add.image(1855, 240, 'hoop')
                    .setScale(.25)
                    .setImmovable()
                    .body.setCircle(240);
                let hoop2 = this.physics.add.image(1855, 540, 'hoop')
                    .setScale(.25)
                    .setImmovable()
                    .body.setCircle(240);
                let hoop3 = this.physics.add.image(1855, 840, 'hoop')
                    .setScale(.25)
                    .setImmovable()
                    .body.setCircle(240);

                let bar1 = this.physics.add.image(1810, 310, 'bar');
                let bar2 = this.physics.add.image(1810, 610, 'bar');
                let bar3 = this.physics.add.image(1810, 910, 'bar');
                bar1.body.setImmovable();
                bar2.body.setImmovable();
                bar3.body.setImmovable();

                // Enable physics for bar images
                this.physics.world.enable([bar1, bar2, bar3]);

    }
}

class summary3 extends Phaser.Scene {
    constructor() {
        super('summary3');
    }
    create(){
        this.add.text(300, 150, "Congratulations on Making 3 Hoops!").setFontSize(50).setFill("#f0000f");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON TO GAME 2").setFontSize(30)
        this.add.text(780, 500, game3points).setFontSize(30);
        this.add.text(650, 560, game3time).setFontSize(30);
        this.add.text(750, 620, game2total).setFontSize(30);
        this.add.text(675, 705, totalpoints).setFontSize(30);
        this.add.text(400, 500, "Balls Shot:\n\nGame 3 time:\n\nTOTAL Level Score:\n\n\nTotal Points:",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('outro')
    });
    }
}
