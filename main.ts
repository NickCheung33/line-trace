input.onButtonPressed(Button.A, function () {
    koi.koi_colorcali("red")
    flag = !(flag)
})
koi.koi_onlinetrack(function (x1, y1, x2, y2) {
	
})
let flag = false
koi.koi_init_pw(koi.SerialPorts.PORT2)
flag = false
basic.forever(function () {
    if (flag) {
        koi.koi_track_line("red")
        basic.pause(500)
    }
})
