// ill be doing some string reversals, palindromes, max characters, and fizz buss in this file


// reversing a string
function revString(str) {
//es-5 with reverse() function
    //return str.split('')
              //.reverse()
              //.join('')
//es-5 without reverse() function
    let revString = ''
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i]
    }
    return revString

}


const output = revString('Hello')
console.log(output)