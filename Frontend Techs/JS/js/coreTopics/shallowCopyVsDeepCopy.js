//!Primitive data types
// undefined
// Boolean
// String
// BigInt
// Number
// Symbol


//!Structured data types
// Objects: (new) Object | class | Array | Map | Set | Date | WeakMap
// Function


var x = 2;
var y = x + 1;
console.log(y)
console.log(x)

const arrx = [2345, 43, 6, 67, 6]
const arry = arrx
arry.push(69)

console.log("arrx:", arrx)
console.log("arry:", arry)


//! Impure Function (the data is mutated)

const scorehistory = [456, 436, 5, 74, 578, 77]
const addScore = (array, score) => {
    array.push(score)
    return array
}
console.log(addScore(scorehistory, 69))


//! Shallow Copy

//* Using rest operator
const arrz = [...arry, 10]
console.log("arrz:", arrz)
console.log(arry)

console.log(arrx === arry)
console.log(arrx === arrz)

//* Using Object.assign() method

const arrt = Object.assign([], arrx)
console.log("arrt:", arrt)
console.log(arrx === arrt)

//* But if there are nested arrays or objects..
//* in shallow copy nested objects references are still passed even done with spread operator of if the object is frozen.
arry.push([435, 4, 6, 5, 66])
const arrv = [...arry]
console.log(arrv)
arrv.push(55)
console.log(arrv)
arrv[6].push(333)
console.log(arrv)
console.log(arry)


//! Deep Copy

console.log(scorehistory)
const newScorehistory = JSON.parse(JSON.stringify(scorehistory))
console.log(newScorehistory)
console.log(newScorehistory === scorehistory)

//* with JSON method, nested properties are lost


//* pure function

const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj

    const newObject = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        const value = obj[key]
        newObject[key] = deepClone(value)
    }

    return newObject
}

const scoreArray = [6, 5, 47, [66, 546, 77], 5]
const newScoreArray = deepClone(scoreArray)
console.log(scoreArray === newScoreArray)

console.log(scoreArray)

const pureFunction = (obj, value, cloneFun) => {

    const newObject = cloneFun(obj);
    newObject.push(value)
    return newObject
}

const newDeepClonesArray = pureFunction(scoreArray, [342543, 436], deepClone)
console.log(newDeepClonesArray)