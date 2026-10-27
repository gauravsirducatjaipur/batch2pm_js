const prompt = require('prompt-sync')()

base = Number(prompt("Enter the base of triangle "))

height = Number(prompt("Enter the height of triangle "))


area = base * height * 0.5

console.log("area of triangle is", area)