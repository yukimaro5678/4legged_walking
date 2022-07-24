led.enable(false)
// 右前
pins.servoWritePin(AnalogPin.P0, 90)
// 左前
pins.servoWritePin(AnalogPin.P1, 90)
// 右後
pins.servoWritePin(AnalogPin.P2, 90)
// 左後
pins.servoWritePin(AnalogPin.P3, 90)
basic.pause(5000)
let 前足振り = 50
let 後足振り = 30
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 90 - 前足振り)
    pins.servoWritePin(AnalogPin.P1, 90 - 前足振り)
    pins.servoWritePin(AnalogPin.P2, 90 + 後足振り)
    pins.servoWritePin(AnalogPin.P3, 90 + 後足振り)
    basic.pause(400)
    pins.servoWritePin(AnalogPin.P0, 90 + 前足振り)
    pins.servoWritePin(AnalogPin.P1, 90 + 前足振り)
    pins.servoWritePin(AnalogPin.P2, 90 - 後足振り)
    pins.servoWritePin(AnalogPin.P3, 90 - 後足振り)
    basic.pause(400)
})
