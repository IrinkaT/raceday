let raceNumber = Math.floor(Math.random() * 1000)
let registered = true
let age = 25

if (age = 18 && registered === true) {
    raceNumber += 1000
}
if (age > 18 && registered === true) {
    console.log('Race start at 9-30am and race number is :' + raceNumber)
} else if (age > 18 && registered === false) {
    console.log('Race start at 11-30am and race number is :' + raceNumber)
}else if(age < 18) {
console.log('race start at 12-30pm and race number is :' + raceNumber)
}else {
    console.log('Please register first!')
}