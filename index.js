// this is to start learning javascript completely from the basic

/* JS STRING METHOD
    PCLUSTER
*/

//padStart and padEnd
let padstart = "5"
padstart = padstart.padStart(5,"0")

let padend = "5"
padend = padend.padEnd(5,"0")

document.getElementById("demo_pad").innerHTML = "padStart = "+padstart+" and "+"=padEnd"+padend


//concat

let text1 = "Mangz"
let text2 = "Kuki"
let text3 = text1.concat(" ",text2)   // " " = adding space between them
 
document.getElementById("demo_concat").innerHTML = text3

// UpperCase and LowerCase

let lowercase = "hello"
let uppercase = "WORLD"

document.getElementById("demo_case").innerHTML = "change from small letter = " + lowercase.toUpperCase() + ",  change from capital letter = "+ uppercase.toLowerCase()


// split

let tosplitword = "hello world"

let splitword = tosplitword.split(" ")
document.getElementById("demo_split").innerHTML = splitword[0]+" "+splitword[1]


// trim

let totrim = "     Hello World    "
let trim = totrim.trim() //trimstart and trimend

document.getElementById("demo_trim").innerHTML = trim

// replace and replaceall

let tochange = "hello"  
let change = tochange.replace(/hello/i,"world") // since it is case sensitive we use /****/i to make it insensitive

document.getElementById("demo_replace").innerHTML = change

// repeat

let torepeat = " i love you! "
document.getElementById("demo_repeat").innerHTML = torepeat.repeat(5).split("!")