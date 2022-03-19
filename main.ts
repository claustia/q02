function 第六步 () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin3, 90)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin4, 90)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin5, 40)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin6, 60)
    basic.pause(100)
}
function 第五步 () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 120)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin4, 60)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 180)
    basic.pause(100)
}
function 第四步 () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 60)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin3, 40)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 0)
}
function 第一步 () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin5, 40)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin8, 120)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin6, 140)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin8, 180)
}
function 第三步 () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin3, 120)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin4, 140)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin5, 90)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin6, 90)
    basic.pause(100)
}
function 第二步 () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin7, 60)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin5, 120)
    basic.pause(100)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin7, 0)
}
mbitbot.All_servo(
0,
180,
90,
90,
90,
90,
0,
180
)
basic.forever(function () {
    第一步()
    第二步()
    第三步()
    第四步()
    第五步()
    第六步()
})
