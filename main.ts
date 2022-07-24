led.enable(false)
pins.servoWritePin(AnalogPin.P0, 0)     // 右前
pins.servoWritePin(AnalogPin.P1, 180)   // 左前
pins.servoWritePin(AnalogPin.P2, 180)   // 右後
pins.servoWritePin(AnalogPin.P3, 0)     // 左後
basic.pause(5000)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 10)
    pins.servoWritePin(AnalogPin.P1, 170)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P2, 170)
    pins.servoWritePin(AnalogPin.P3, 10)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 170)
    pins.servoWritePin(AnalogPin.P1, 10)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P2, 10)
    pins.servoWritePin(AnalogPin.P3, 170)
    basic.pause(1000)
})
