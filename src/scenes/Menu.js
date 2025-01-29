class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.image("rocket", "./assets/rocket.png")
        this.load.image("spaceship", "./assets/spaceship.png")
        this.load.image("starfield", "./assets/starfield.png")
        this.load.spritesheet("explosion", "./assets/explosion.png", {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
        this.load.audio("sfx-select", "./assets/sfx-select.wav");
        this.load.audio("sfx-explosion", "./assets/sfx-explosion.wav");
        this.load.audio("sfx-shot", "./assets/sfx-shot.wav");
    }

    create(){
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        this.backgroundFar = this.add.tileSprite(0, 0, 640, 480, "starfield").setOrigin(0, 0);
        this.backgroundMiddle = this.add.tileSprite(0, 0, 640, 480, "starfield").setOrigin(0, 0).setAlpha(0.7);
        this.backgroundNear = this.add.tileSprite(0, 0, 640, 480, "starfield").setOrigin(0, 0).setAlpha(0.5);
        let titleConfig = {
            fontFamily: "Comic Sans MS",
            fontSize: "31px",
            fontStyle: "bold",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            align: "center",
            padding: {
                top: 10,
                bottom: 10,
            },
            fixedWidth: 500
        };

        this.add.text(game.config.width/2, game.config.height/4, "ROCKET PATROL VII: REBIRTH", titleConfig).setOrigin(0.5);
        let instructionConfig = {
            fontFamily: "Courier",
            fontSize: "24px",
            color: "#FFFF00",
            align: "center",
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        };

        this.add.text(game.config.width/2, game.config.height/2 - 30, "Use <--> arrows to move & (F) to fire", instructionConfig).setOrigin(0.5);
        let modeConfig = {
            fontFamily: "Courier",
            fontSize: "24px",
            backgroundColor: "#008000",
            color: "#FFFFFF",
            align: "center",
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 300
        };

        this.add.text(game.config.width/2, game.config.height/2 + 30, "Press ← for Novice", modeConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 60, "Press → for Expert", modeConfig).setOrigin(0.5);
        this.add.image(game.config.width / 2, game.config.height - 50, "spaceship").setOrigin(0.5);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        this.backgroundFar.tilePositionX -= 1;
        this.backgroundMiddle.tilePositionX -= 2;
        this.backgroundNear.tilePositionX -= 4;
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            };
            this.sound.play("sfx-select");
            this.scene.start("playScene");
        }

        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            };
            this.sound.play("sfx-select");
            this.scene.start("playScene");
        }
    }
}

let keyFIRE, keyRESET, keyLEFT, keyRIGHT;