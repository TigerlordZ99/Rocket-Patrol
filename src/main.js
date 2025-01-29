// Name: Madhav Ramakrishnan
// Title: Rocket Patrol VII: Rebirth
// Time: 11 hours
// Mods: 
// Implemented the FIRE UI (1)
// Implemented the speed increase after the timer is reduced by 30 seconds (1)
// Displayed the time remaining on the screen (3)
// Implemented parralax scrolling (3)
// Changed the title screen (3)
// Scoring mechanism that increases time with hits and reduces time with misses (5)
// Implemented mouse control and click to fire (5)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height/15
let borderPadding = borderUISize/3
