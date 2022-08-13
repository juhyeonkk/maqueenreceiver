radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        leftY = value
        rightY = value
    }
    if (name == "x") {
        leftX = 0 - value
        rightX = value
    }
    left = leftX + leftY
    right = rightX + rightY
})
let right = 0
let left = 0
let rightX = 0
let leftX = 0
let rightY = 0
let leftY = 0
radio.setGroup(1)
basic.forever(function () {
    if (left < 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.abs(left))
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, left)
    }
    if (right < 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Math.abs(right))
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, right)
    }
})
