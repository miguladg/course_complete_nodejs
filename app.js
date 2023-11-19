
const validator = require('validator')
const getNoteS = require('./note')
const chalk = require('chalk')
// set 2
// It's necesari change the name' funtion because is more clear for us and can understantr better, thanks
// Remenber we can change the name of the funtion for the funtion.
// const name = 'Andrew'
// this is first require happens up here and that's when Utils runs.
// albeit a simple one that takes advantage of mutiple files.

//const sum = add(4, -2)
// set 1 intro go to varible add

// console.log(sum)
// set 6 final show in the terminal
// If you dont put the good varobles show the name funtion
// for sample if this funtion the varibles the name is fistNme

const mgs = getNoteS()
console.log(mgs)

console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#content'))

const blueMg = chalk.blue.underline("hola papi!!!!")

console.log(chalk.red("Success!"))

console.log(chalk.green("Success!"))
console.log(blueMg)
