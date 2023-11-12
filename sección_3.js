const fs = require('fs')
//we can change the name to funtion and it's working the same way

console.log('Append Write a fiel sync')

//fs.writeFileSync('note.txt', "this change because the name of funtion its change");

// Challenge: Append a message to notes.txt
// 1. Use appenFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

// 1.
fs.appendFileSync('note.txt', "This text is addicional!!!!")
//call dependencia.call the function

// 2. 
