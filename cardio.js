// ill be doing some string reversals, palindromes, max characters, and fizz buss in this file


////////// reversing a string ////////////
function revString(str) {
//es-5 with reverse() function//

    //return str.split('')
              //.reverse()
              //.join('')

//es-5 without reverse() function//

    //let revString = ''
    //for(let i = str.length - 1; i >= 0; i--) {
        //revString = revString + str[i]
    //}
    //return revString

//es-6 for of loop//
    //let revString = ''
    //for(let char of str) {
        //revString = char + revString;
    //}
    //return revString

//es-6 for each loop//
    //let revString = ''
    //str.split('').forEach(char => {
        //revString = char + revString   
    //});
    //return revString

//es-6 reduce
    //return str.split('').reduce((revString, char) => char + revString, '')

}
///////////////finding if the string is a palendrome/////////////
function isPalendrome(str) {
    const revString = str.split('').reverse().join('')
    return revString === str;

}

//////////reverse an integer///////////////

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('')
    return parseInt(revString) * Math.sign(int)

}


const output = reverseInt(1234)
console.log(output)