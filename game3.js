
class game3 extends Phaser.Scene {
    constructor(){
        super('game3');

    }
    create()
    {
        this.add.image(320, 256, 'court').setScale(1.35);
        this.add.text(300, 150, "Make the ball into the hoop!").setFontSize(50).setFill("#f0000f");
        this.cameras.main.setBackgroundColor(0x1D1923);

        //player
        this.player = this.physics.add.image(950, 950, 'bar')
        this.player.body.setCollideWorldBounds(true); //player cannot go out of bounds
        this.player.body.setImmovable();

        //goal
        const goal = this.physics.add.image(950, 100, 'hoop')
            .setScale(.25)

        goal.body.setImmovable();
        goal.body.onCollide = true;
        goal.body.setCircle(245);

        //ball
        const ball = this.physics.add.image(400, 300, 'basketball')
            .setVelocity(500, 500)
            .setScale(.5)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setGravityY(200)
            .body.setCircle(80);
        this.input.on('pointermove', pointer =>
        {
            this.player.x = pointer.worldX;
        });
        this.physics.add.collider(this.player, ball, () => {
            game3bounces++;
          });
        this.physics.add.overlap(goal, ball, () => {
            this.scene.start('summary3');
          });
          
        this.time.addEvent({
            delay: 1000, // Update the time every second
            loop: true,
            callback: () => {
                game3time++; // Increment the elapsed time
                }
            });

    }

}


class summary3 extends Phaser.Scene {
    constructor() {
        super('summary3');
    }
    create(){

        if(game3bounces > 0){
            game3total = Phaser.Math.RoundTo((game3bounces/game3time) * 40);
        }
        totalpoints = totalpoints + game3total;
        this.add.text(400, 200, "Congratulations on making the goal!").setFontSize(50).setFill("#00ff00");
        this.add.text(750, 800, "CLICK ANYWHERE TO MOVE ON").setFontSize(30)
        this.add.text(790, 400, game3bounces).setFontSize(30);
        this.add.text(750, 460, game3time).setFontSize(30);
        this.add.text(850, 520, game3total).setFontSize(30);
        this.add.text(775, 605, totalpoints).setFontSize(30);
        this.add.text(500, 400, "Ball Bounces:\n\nGame 3 time:      seconds\n\nTOTAL Level Score:\n\n\nTotal Points:",).setFontSize(30) 
            this.input.on('pointerdown', () => {
                this.scene.start('outro')
    });
    }
}
