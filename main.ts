input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    kitronik_servo_lite.forward()
    basic.pause(1000)
    kitronik_servo_lite.stop()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    servos.P0.setAngle(20)
    basic.pause(1000)
    servos.P0.setAngle(-20)
    kitronik_servo_lite.stop()
})
basic.forever(function () {
	
})
