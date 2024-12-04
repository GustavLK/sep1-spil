function Kemilalier () {
    for (let index = 0; index < 1; index++) {
        pause(500)
        while (tilfældigkemi == nykemi) {
            nykemi = randint(1, 6)
        }
        tilfældigkemi = nykemi
        if (nykemi == 1) {
            kemi_1 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
        } else if (nykemi == 2) {
            kemi_1 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
        } else if (nykemi == 3) {
            kemi_1 = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
        } else if (nykemi == 4) {
            kemi_1 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
        } else if (nykemi == 5) {
            kemi_1 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        } else if (nykemi == 6) {
            kemi_1 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
        }
    }
    for (let index = 0; index < 1; index++) {
        kemi_1.setPosition(70, 63)
        kemi_1.setVelocity(randint(-50, 50), randint(30, 70))
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startmode = false
    SpilA()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Spiller.setVelocity(-65, 0)
})
function SpilA () {
    Spiller = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f d 5 5 5 5 5 5 d f . . 
        . f d 5 5 5 5 5 5 5 5 d f . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        f b 5 5 5 5 5 5 5 5 5 5 b f 
        f b 5 5 5 5 5 5 5 5 5 5 b f 
        f b b 5 5 5 5 5 5 5 5 b b f 
        f b b b d 5 5 5 5 d b b b f 
        f b b b b b b b b b b b b f 
        f f b b b b b b b b b b f . 
        . c c b b b b b b b b c c . 
        . 4 d c f f f f f f c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 b f f . . 
        . . . . f f b b f f . . . . 
        `, SpriteKind.Player)
    Spiller.setPosition(81, 113)
    Spiller.setStayInScreen(true)
    scene.setBackgroundImage(assets.image`Baggrund 2`)
    game.splash("Hej vi får brug for din hjælp til at fjerne de farlige kemikalier fra vandet")
    while (true) {
        scene.setBackgroundImage(assets.image`Baggrund 2`)
        pause(1000)
        scene.setBackgroundImage(assets.image`Baggrund 3`)
        Kemilalier()
        pause(1000)
        scene.setBackgroundImage(assets.image`Baggrund 4`)
        Kemilalier()
        pause(1000)
        scene.setBackgroundImage(assets.image`Baggrund 5`)
        Kemilalier()
        pause(1000)
        scene.setBackgroundImage(assets.image`Baggrund 6`)
        Kemilalier()
        pause(1000)
        scene.setBackgroundImage(assets.image`Baggrund 7`)
        Kemilalier()
        pause(1000)
        scene.setBackgroundImage(assets.image`Baggrund 8`)
        Kemilalier()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Spiller.setVelocity(65, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(kemi_1, effects.hearts, 200)
    info.changeScoreBy(1)
})
let Spiller: Sprite = null
let kemi_1: Sprite = null
let nykemi = 0
let tilfældigkemi = 0
let nybaggrund = 0
let tilfældigbaggrund = 0
let startmode = false
scene.setBackgroundImage(assets.image`Gamestart`)
startmode = true
while (startmode) {
    pause(500)
    while (tilfældigbaggrund == nybaggrund) {
        nybaggrund = randint(1, 3)
    }
    tilfældigbaggrund = nybaggrund
    if (tilfældigbaggrund == 1) {
        scene.setBackgroundImage(assets.image`Gamestart`)
    } else if (tilfældigbaggrund == 2) {
        scene.setBackgroundImage(assets.image`Gamestart0`)
    } else if (tilfældigbaggrund == 3) {
        scene.setBackgroundImage(assets.image`Gamestart1`)
    }
}
