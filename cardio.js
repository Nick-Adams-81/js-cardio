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

/////////////finding capitalized letters///////////////
function capLetter(str) {
//es-5 for loop
    //const strArr = str.toLowerCase().split(' ')

    //for(let i = 0; i < strArr.length; i++) {
        //strArr[i] = strArr[i].substring(0, 1).toUpperCase() + 
        //strArr[i].substring(1)
    //}
    //return strArr.join(' ')
//es-6 map 
    //return str
        //.toLowerCase()
        //.split(' ')
        //.map(word => word[0].toUpperCase() + word.substr(1))
        //.join(' ')

// regular expressions
    //return str.replace(/\b[a-z]/gi, function(char) {
        //return char.toUpperCase()
    //})

}

///////////finding max characters in a string////////////
function maxCharacters(str) {
    const charMap = {}
    let maxNum = 0
    let maxChar = ''

    str.split('').forEach(function(char) {
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })

    for(let char in charMap) {
        if(charMap[char] > maxNum ) {
            maxNum = charMap[char]
            maxChar = char
        } 
    }
    return maxChar

}

///////////////fizzbuzz/////////////

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log('fizz buzz')
        } else if( i % 3 === 0 ) {
            console.log('fizz')

        } else if(i % 5 === 0) {
            console.log('buzz')

        } else {
            console.log(i)
        }

    }
}





const output = fizzBuzz()
console.log(output)