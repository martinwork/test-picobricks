picobricks.onGesture(gestureType.none, function () {
    picobricks.initGesture(gestureinit.none)
    basic.showNumber(picobricks.readProximity())
    basic.showNumber(picobricks.brightness())
    basic.showNumber(picobricks.readBlueColor())
    basic.showNumber(picobricks.readGreenColor())
    basic.showNumber(picobricks.readRedColor())
    basic.showString(picobricks.readColor())
    basic.showNumber(picobricks.readHue())
    basic.showNumber(picobricks.gestureId())
})
picobricks.onIrButton(irButtonList.Number_1, irButtonAction.Pressed, function () {
    picobricks.connectIrReceiver(DigitalPin.P15)
    basic.showString("" + (picobricks.wasIrDataReceived()))
    basic.showNumber(picobricks.irButtonCode(irButtonList.Number_1))
    basic.showString(picobricks.selectIrButton())
})
let strip = picobricks.create(DigitalPin.P8, 3)
let range = strip.range(0, 0)
strip.showRainbow(0, 0)
strip.showColor(picobricks.rgbcolors(rgbColorsList.Red))
strip.showBarGraph(0, 0)
strip.setPixelColor(0, picobricks.rgbcolors(rgbColorsList.Red))
strip.show()
strip.clear()
basic.showNumber(strip.length())
strip.setBrightness(0)
strip.easeBrightness()
basic.showNumber(picobricks.hsl(0, 0, 0))
strip.shift(0)
strip.rotate(0)
basic.showNumber(strip.power())
strip.setMatrixWidth(0)
strip.setMatrixColor(0, 0, picobricks.rgbcolors(rgbColorsList.Red))
basic.showNumber(picobricks.rgbcolors(rgbColorsList.Red))
basic.showNumber(picobricks.rgb(0, 0, 0))
basic.forever(function () {
    picobricks.dcmotor(dcMotorType.dc1, 0, directionType.forward)
    picobricks.servomotor(servoMotorType.servo1, 0)
})
basic.forever(function () {
    basic.showString("" + (picobricks.isESPInitialized()))
    picobricks.esp01init(SerialPin.P14, SerialPin.P15, BaudRate.BaudRate115200)
    picobricks.connectWiFi("", "")
    basic.showString("" + (picobricks.isWifiConnected()))
    picobricks.uploadThingspeak(
    "",
    0
    )
    basic.showString("" + (picobricks.isThingspeakUploaded()))
})
basic.forever(function () {
    picobricks.oledinit(60)
    picobricks.showNumber(
    0,
    0,
    12,
    1
    )
    picobricks.showString(
    0,
    0,
    "Hello!",
    1
    )
    picobricks.rect(
    0,
    0,
    60,
    30,
    1
    )
    picobricks.vline(0, 0, 10)
    picobricks.hline(0, 0, 10)
    picobricks.pixel(0, 0, 1)
    picobricks.invert(true)
    picobricks.draw()
    picobricks.oledclear()
    picobricks.oledon()
    picobricks.oledoff()
    picobricks.oledzoom(true)
})
basic.forever(function () {
    basic.showNumber(picobricks.keyValue(picobricks.pianoKeyAddresses.X))
    basic.showString("" + (picobricks.keyIsPressed(picobricks.pianoKeyAddresses.X)))
    picobricks.userPiano(picobricks.pianoKeyAddresses.X, notes.lowDo)
    picobricks.playPiano(volumeStatus.passive, toneStatus.passive)
    picobricks.touchInit()
})
basic.forever(function () {
    basic.showNumber(picobricks.mq2Read(AnalogPin.P0))
    basic.showNumber(picobricks.soilRead(AnalogPin.P0))
    basic.showNumber(picobricks.hcsrRead(DigitalPin.P2, DigitalPin.P1))
    basic.showNumber(picobricks.hcsrRead(DigitalPin.P2, DigitalPin.P1))
    basic.showNumber(picobricks.pirRead())
    basic.showNumber(picobricks.potRead())
    picobricks.relay(picobricks.set_relay.low)
    basic.showNumber(picobricks.buttonRead())
    basic.showNumber(picobricks.ldrRead())
})
basic.forever(function () {
    picobricks.shtcInit()
    basic.showNumber(picobricks.readShtcId())
    basic.showNumber(picobricks.humidity())
    basic.showNumber(picobricks.temperature(tempList.celsius))
})
