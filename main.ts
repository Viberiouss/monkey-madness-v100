namespace SpriteKind {
    export const Catch = SpriteKind.create()
    export const Not = SpriteKind.create()
    export const Die = SpriteKind.create()
    export const Fall = SpriteKind.create()
    export const Check = SpriteKind.create()
    export const Early = SpriteKind.create()
    export const Late = SpriteKind.create()
}
    scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    fffffffffff1ffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffddffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffdddfffffdffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffdddddffffddffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffdddddddfffddffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffddddddfffdddfffffffffdddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffdddddfffddddffffffffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffdddddddfffddffffffffffddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffdddddddffdddfffffffddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffddddddfffdddfffffffffddddddffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffddddddddffddddfffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffddddddddddddffffffdddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffdddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffdffffffffffdddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffff
    ffffffffffffdddfffffffffffdddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffddffffffffffffffffff
    ffffffffffffddffffffffffddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffddfffddffffffffffffffffff
    fffffffffffdddfffffffffddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffffffddffdddffffffffffffffffff
    ffffffffffdddddffffffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffdfffddddfdddddffffffffffffffff
    fffffffffffdddfffffddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffdddffddddffddffffffffffffffffff
    ffffffffffffdddfffddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffddddffffdfffffffffffffffffffffffffffffffffffffdddfffddffddddddfffffffffffffff
    ffffffffffddddffdddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffddffffffddfffffdffffffffffffffffffffffffffffffffffffddddfdddddddddfffffffffdffffffff
    fffffffffffdddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffdddffffddddddfffddfffffffffffffffffffffffffffffffffffffdddddddddddddffffffffdffffffff
    ffffffffffffdddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffddddfffffddddffffddffffffffffffffffffffffffffffffffffffdddddddddddddffffffffddddffffff
    ffffffffffffddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffdddffffdddddffdddfffffffffffffdffffffffffffffffffffdddddddddddddddfffffffffdffffffff
    fffffffffffdddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffddddddfddddddddfddddfffffffffffddfffffffffffffffffffffdddddddddddddddddffffddddfffffff
    ffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffddddddddddddddddddddffffffffffffdddfffffffffffffdfffffddddddddddddddddddddfffdddfffffff
    ffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffdddddddddddddddddddffffffffffdddddffffffffffffdffffddddddddddddddddddddddffdddddfffff
    fffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddddddddddddffffffffffdddddddfffffffffffddfffffddddddddddddddddddddddddddffffff
    ffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffdddddddddddddddddddddddfffffffddddddffffffffffffddffffddddddddddddddddddddddddddfffffff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddddddddddddddddfffffdddddfffffffffffdddffffddddddddddddddddddddddddddfffffff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffddddddddddddddddddddddddddffdddddddfffffffffffdffffddddddddddddddddddddddddddddffffff
    ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddffffffffffddddffddddddddddddddddddddddddddddddffff
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddffffffffffffddffdddddddddddddddddddddddddddddddddff
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffdddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
`)


let myMonkey = sprites.create(img`
    . . . . f f f f f . . . . . . .
    . . . f e e e e e f . . . . . .
    . . f d d d d e e e f . . . . .
    . c d f d d f d e e f f . . . .
    . c d f d d f d e e d d f . . .
    c d e e d d d d e e b d c . . .
    c d d d d c d d e e b d c . . .
    c c c c c d d e e e f c . . . .
    . f d d d d e e e f f . . . . .
    . . f f f f f e e e e f . . . .
    . . . . f f e e e e e e f . f f
    . . . f e e f e e f e e f . e f
    . . f e e f e e f e e e f . e f
    . f b d f d b f b b f e f f e f
    . f d d f d d f d d b e f f f f
    . . f f f f f f f f f f f f f .
`, SpriteKind.Player)
let myRight = sprites.create(assets.image`myImage5`, SpriteKind.Not)
let myUp = sprites.create(assets.image`myImage10`, SpriteKind.Not)
let myDown = sprites.create(assets.image`myImage3`, SpriteKind.Not)
let myLeft = sprites.create(assets.image`myImage9`, SpriteKind.Not)
let myLine = sprites.create(assets.image`myImage0`, SpriteKind.Die)
let speed = 0
let scroll1 = 200
let scroll2 = 600
let up_press_time = 0
let right_press_time = 0
let left_press_time = 0
let down_press_time = 0
let earlyright = sprites.create(assets.image`myImage15`, SpriteKind.Not)
let earlyleft = sprites.create(assets.image`myImage15`, SpriteKind.Not)
let earlydown = sprites.create(assets.image`myImage15`, SpriteKind.Not)
let earlyup = sprites.create(assets.image`myImage15`, SpriteKind.Not)
let lateright = sprites.create(assets.image`myImage16`, SpriteKind.Not)
let lateleft = sprites.create(assets.image`myImage16`, SpriteKind.Not)
let lateup = sprites.create(assets.image`myImage16`, SpriteKind.Not)
let latedown = sprites.create(assets.image`myImage16`, SpriteKind.Not)
speed = game.askForNumber("Scrollspeed (normal is 100)", 3)
myLine.setPosition(80, 120)
myLeft.setPosition(40, 100)
myDown.setPosition(60, 100)
myUp.setPosition(80, 100)
myRight.setPosition(100, 100)
earlyleft.setPosition(40, 92)
earlyright.setPosition(100, 92)
earlyup.setPosition(80, 92)
earlydown.setPosition(60, 92)
lateleft.setPosition(40, 108)
latedown.setPosition(60, 108)
lateright.setPosition(100, 108)
lateup.setPosition(80, 108)
let myHealth = statusbars.create(100, 5, StatusBarKind.Health)

myMonkey.setPosition(130, 80)

myHealth.setColor(0x7, 0x2)
myHealth.max = 100
myHealth.value = 50
myHealth.positionDirection(CollisionDirection.Top)
myHealth.setOffsetPadding(0, 10)

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f . . . . . .
        . . f d d d d e e e f . . . . .
        . . f d d f d d e e f f . . . .
        . c d d d f d d e e d d f . . .
        c d e e d d d d e e b d c . . .
        c d d d d c d d e e b d c . . .
        c f f f f d d d e e f c f . . .
        . f b d f f f e e e e f . . . .
        . f d d f e f f f e e f . . . .
        . . f f f e e e e f f f . f f .
        . . f e e f e e e e f f . e f .
        . f f e e e f f f f f f f e f .
        . f b d f e e f b b f f f e f .
        . f d d f f e e d d b f f f f .
        . f f f f f f f f f f f f f . .
    `)
    myLeft.setImage(assets.image`myImage8`)
    myLeft.setKind(SpriteKind.Catch)
    earlyleft.setKind(SpriteKind.Early)
    lateleft.setKind(SpriteKind.Late)
    left_press_time = game.runtime()
    music.playTone(Note.F, 250)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    myMonkey.setImage(img`
        . . . . . f f f f f . . . . . .
        . . . . f e e e e e f . . . . .
        . . . f d d d d d e e f . . . .
        . . f f f d d f f d e f f . . .
        . c d d e e d d d d e d d f . .
        . c c d d d d c d d e d f f f .
        . c d c c c c d d d e d f b d f
        . . c d d d d d d e e f f d d f
        . . . c d d d d e e f f e f f f
        . . . . f f f e e f e e e f . .
        . . . . f e e e e e e e f f f .
        . . . f e e e e e e f f f e f .
        . . f f e e e e f f f f f e f .
        . f b d f e e f b b f f f e f .
        . f d d f e e f d d b f f f f .
        . f f f f f f f f f f f f f . .
    `)
    myRight.setImage(assets.image`myImage6`)
    myRight.setKind(SpriteKind.Catch)
    earlyright.setKind(SpriteKind.Early)
    lateright.setKind(SpriteKind.Late)
    right_press_time = game.runtime()
    music.playTone(Note.D, 250)
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f f f . . . .
        . . f d d d e e e e d d f . . .
        . c d d d d d e e e b d c . . .
        . c d d d d d d e e b d c . . .
        c d d f d d f d e e f c . f f .
        c d d f d d f d e e f . . f e f
        c d e e d d d d e e f . . f e f
        . f d d d c d e e f f . . f e f
        . . f f f d e e e e e f . f e f
        . . . . f e e e e e e e f f f .
        . . . . f f e e e e e b f f . .
        . . . f e f f e e c d d f f . .
        . . f d d b d d c f f f . . . .
        . . f d d c d d d f f . . . . .
        . . . f f f f f f f . . . . . .
    `)
    myDown.setImage(assets.image`myImage4`)
    myDown.setKind(SpriteKind.Catch)
    earlydown.setKind(SpriteKind.Early)
    latedown.setKind(SpriteKind.Late)
    down_press_time = game.runtime()
    music.playTone(Note.E, 250)
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f . . . . . .
        . . f d d d d e e e f . . . . .
        . c d f d d f d e e f . . . . .
        . c d f d d f d e e f f . . . .
        c d e e d d d d e e d d f . . .
        c d d d d c d d e e b d c . . .
        c c c c c d d e e e b d c . f f
        . f d d d d e e e f f c . f e f
        . f f f f f f e e e e f . f e f
        . f f f f e e e e e e e f f e f
        f d d f d d f e f e e e e f f .
        f d b f d b f e f e e e e f . .
        f f f f f f f f f f f f e f . .
        . . . . . . . . . f c d d f . .
        . . . . . . . . . . f f f f . .
    `)
    myUp.setImage(assets.image`myImage1`)
    myUp.setKind(SpriteKind.Catch)
    earlyup.setKind(SpriteKind.Early)
    lateup.setKind(SpriteKind.Late)
    up_press_time = game.runtime()
    music.playTone(Note.C, 250)
})

controller.left.onEvent(ControllerButtonEvent.Released, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f . . . . . .
        . . f d d d d e e e f . . . . .
        . c d f d d f d e e f f . . . .
        . c d f d d f d e e d d f . . .
        c d e e d d d d e e b d c . . .
        c d d d d c d d e e b d c . . .
        c c c c c d d e e e f c . . . .
        . f d d d d e e e f f . . . . .
        . . f f f f f e e e e f . . . .
        . . . . f f e e e e e e f . f f
        . . . f e e f e e f e e f . e f
        . . f e e f e e f e e e f . e f
        . f b d f d b f b b f e f f e f
        . f d d f d d f d d b e f f f f
        . . f f f f f f f f f f f f f .
    `)
    myLeft.setKind(SpriteKind.Not)
    earlyleft.setKind(SpriteKind.Not)
    lateleft.setKind(SpriteKind.Not)
    myLeft.setImage(assets.image`myImage9`)
})

controller.right.onEvent(ControllerButtonEvent.Released, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f . . . . . .
        . . f d d d d e e e f . . . . .
        . c d f d d f d e e f f . . . .
        . c d f d d f d e e d d f . . .
        c d e e d d d d e e b d c . . .
        c d d d d c d d e e b d c . . .
        c c c c c d d e e e f c . . . .
        . f d d d d e e e f f . . . . .
        . . f f f f f e e e e f . . . .
        . . . . f f e e e e e e f . f f
        . . . f e e f e e f e e f . e f
        . . f e e f e e f e e e f . e f
        . f b d f d b f b b f e f f e f
        . f d d f d d f d d b e f f f f
        . . f f f f f f f f f f f f f .
    `)
    myRight.setKind(SpriteKind.Not)
    earlyright.setKind(SpriteKind.Not)
    lateright.setKind(SpriteKind.Not)
    myRight.setImage(assets.image`myImage5`)
})

controller.down.onEvent(ControllerButtonEvent.Released, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f . . . . . .
        . . f d d d d e e e f . . . . .
        . c d f d d f d e e f f . . . .
        . c d f d d f d e e d d f . . .
        c d e e d d d d e e b d c . . .
        c d d d d c d d e e b d c . . .
        c c c c c d d e e e f c . . . .
        . f d d d d e e e f f . . . . .
        . . f f f f f e e e e f . . . .
        . . . . f f e e e e e e f . f f
        . . . f e e f e e f e e f . e f
        . . f e e f e e f e e e f . e f
        . f b d f d b f b b f e f f e f
        . f d d f d d f d d b e f f f f
        . . f f f f f f f f f f f f f .
    `)
    myDown.setKind(SpriteKind.Not)
    earlydown.setKind(SpriteKind.Not)
    latedown.setKind(SpriteKind.Not)
    myDown.setImage(assets.image`myImage3`)
})

controller.up.onEvent(ControllerButtonEvent.Released, function() {
    myMonkey.setImage(img`
        . . . . f f f f f . . . . . . .
        . . . f e e e e e f . . . . . .
        . . f d d d d e e e f . . . . .
        . c d f d d f d e e f f . . . .
        . c d f d d f d e e d d f . . .
        c d e e d d d d e e b d c . . .
        c d d d d c d d e e b d c . . .
        c c c c c d d e e e f c . . . .
        . f d d d d e e e f f . . . . .
        . . f f f f f e e e e f . . . .
        . . . . f f e e e e e e f . f f
        . . . f e e f e e f e e f . e f
        . . f e e f e e f e e e f . e f
        . f b d f d b f b b f e f f e f
        . f d d f d d f d d b e f f f f
        . . f f f f f f f f f f f f f .
    `)
    myUp.setKind(SpriteKind.Not)
    earlyup.setKind(SpriteKind.Not)
    lateup.setKind(SpriteKind.Not)
    myUp.setImage(assets.image`myImage10`)
})


sprites.onOverlap(SpriteKind.Die, SpriteKind.Fall, function(sprite, otherSprite) {
    music.knock.play()
    otherSprite.destroy()
    myHealth.value += -2
    myMonkey.say("MISS!")
})

statusbars.onZero(StatusBarKind.Health, function(status) {
    game.over(false)
})
game.onUpdateInterval(randint(scroll1, scroll2), function() {
let righty = sprites.create(assets.image`myImage13`, SpriteKind.Fall)
    righty.setPosition(100, 20)
    righty.setVelocity(0, speed)
    righty.setFlag(SpriteFlag.AutoDestroy, true)
sprites.onOverlap(SpriteKind.Catch, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    myHealth.value += 1
    info.changeScoreBy(100)
    myMonkey.say("Perfect!")
})
sprites.onOverlap(SpriteKind.Early, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Early!")
})
sprites.onOverlap(SpriteKind.Late, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Late!")
})
})

game.onUpdateInterval(randint(scroll1, scroll2), function() {
let downy = sprites.create(assets.image`myImage11`, SpriteKind.Fall)
    downy.setPosition(60, 20)
    downy.setVelocity(0, speed)
    downy.setFlag(SpriteFlag.AutoDestroy, true)
sprites.onOverlap(SpriteKind.Catch, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    myHealth.value += 1
    info.changeScoreBy(100)
    myMonkey.say("Perfect!")
})
sprites.onOverlap(SpriteKind.Early, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Early!")
})
sprites.onOverlap(SpriteKind.Late, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Late!")
})
})

game.onUpdateInterval(randint(scroll1, scroll2), function() {
let upty = sprites.create(assets.image`myImage7`, SpriteKind.Fall)
    upty.setPosition(80, 20)
    upty.setVelocity(0, speed)
    upty.setFlag(SpriteFlag.AutoDestroy, true)
sprites.onOverlap(SpriteKind.Catch, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    myHealth.value += 1
    info.changeScoreBy(100)
    myMonkey.say("Perfect!")
})
sprites.onOverlap(SpriteKind.Early, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Early!")
})
sprites.onOverlap(SpriteKind.Late, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Late!")
})
})

game.onUpdateInterval(1000, function() {
    scroll1 += -100
    scroll2 += -100
})

game.onUpdateInterval(randint(scroll1, scroll2), function() {
let lefty = sprites.create(assets.image`myImage12`, SpriteKind.Fall)
    lefty.setPosition(40, 20)
    lefty.setVelocity(0, speed)
    lefty.setFlag(SpriteFlag.AutoDestroy, true)
sprites.onOverlap(SpriteKind.Catch, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    myHealth.value += 1
    info.changeScoreBy(100)
    myMonkey.say("Perfect!")
})
sprites.onOverlap(SpriteKind.Early, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Early!")
})
sprites.onOverlap(SpriteKind.Late, SpriteKind.Fall, function(sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(75)
    myMonkey.say("Late!")
})
})

forever(function () {
    if (controller.up.isPressed()) {
        if (game.runtime() - up_press_time > 500) {
            myUp.setImage(assets.image`myImage10`)
            myUp.setKind(SpriteKind.Not)
            earlyup.setKind(SpriteKind.Not)
            lateup.setKind(SpriteKind.Not)
        }
    }
    if (controller.left.isPressed()) {
        if (game.runtime() - left_press_time > 500) {
            myLeft.setImage(assets.image`myImage9`)
            myLeft.setKind(SpriteKind.Not)
            earlyleft.setKind(SpriteKind.Not)
            lateleft.setKind(SpriteKind.Not)
        }
    }
    if (controller.right.isPressed()) {
        if (game.runtime() - right_press_time > 500) {
            myRight.setImage(assets.image`myImage5`)
            myRight.setKind(SpriteKind.Not)
            earlyright.setKind(SpriteKind.Not)
            lateright.setKind(SpriteKind.Not)
        }
    }
    if (controller.down.isPressed()) {
        if (game.runtime() - down_press_time > 500) {
            myDown.setImage(assets.image`myImage3`)
            myDown.setKind(SpriteKind.Not)
            earlydown.setKind(SpriteKind.Not)
            latedown.setKind(SpriteKind.Not)
        }
    }
})