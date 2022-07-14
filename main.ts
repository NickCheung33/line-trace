MakerCloud_KOI.registerTopicMessageHandler("ZBOP3RO2", function (receivedMessage) {
    if (receivedMessage == "trace") {
        koi.koi_colorcali("black")
        flag = !(flag)
    } else if (receivedMessage == "stop") {
        receivedMessage = flag
    }
})
koi.koi_onlinetrack(function (x1, y1, x2, y2) {
    if (x1 < x2 + 1) {
        powerbrick.MotorRun(powerbrick.Motors.M1, 100)
        powerbrick.MotorRun(powerbrick.Motors.M2, 255)
    } else if (x2 < x1 + 1) {
        powerbrick.MotorRun(powerbrick.Motors.M1, 255)
        powerbrick.MotorRun(powerbrick.Motors.M2, 100)
    } else if (x2 == x1) {
        powerbrick.MotorRun(powerbrick.Motors.M1, 255)
        powerbrick.MotorRun(powerbrick.Motors.M2, 255)
    }
})
let flag = ""
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_join_ap("ssid", "password")
flag = false
MakerCloud_KOI.connectMakerCloudMQTT()
MakerCloud_KOI.subscribeTopic("ZBOP3RO2")
basic.forever(function () {
    if (flag) {
        koi.koi_track_line("black")
        basic.pause(500)
    }
})
