controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 16
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Frogger`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
mySprite.setStayInScreen(true)
