//*!  || CHAPTER - 6 (Classes)

















/*
//*!  || CHAPTER - 4 (Type Assertions)

type one = string
type two = string | number
type three = 'hello'

//* convert to more or less specific

let a: one = 'hello'
let b = a as two; //less specific
let c = a as three; //more specific

let d = <one>'World'
let e = <string | number>'World'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {

    if (c === 'add') return a + b

    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

//*! Be careful! TS see no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//10 as string
(10 as unknown) as string

// const img = document.querySelector('img')!
// const myImg = document.getElementById('#img') as HTMLImageElement;
// const nxtImg = <HTMLImageElement>document.getElementById('#img')

// img.src
// myImg.src
// nxtImg.src

//* Original Js code (to be typed in TS)
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear

// 1st variation
// const year: HTMLElement | null = document.getElementById('year');
// const thisYear: string = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }

// 2nd variation
const year = document.getElementById('year') as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute('datetime', thisYear)
year.textContent = thisYear


//*!  || CHAPTER - 4 (functions)

//* type mathFunction = (a: number, b: number) => number

interface mathFunction {
    (a: number, b: number): number
}

const add: mathFunction = (a, b) => {
    return a + b
}

console.log(add(3, 10))

const substract = (a: number, b: number): number => {
    return a - b
}

console.log(substract(3, 4))

const anyMesg = (msg: any): void => {
    console.log(msg)
}

anyMesg("This is a human!")

const multiply: mathFunction = function (a, b) {
    return a * b
}
anyMesg(multiply(2, 4))

//* optional parameters

const addAll = (a: number, b: number, c?: number) => {
    if (c !== undefined) {
        return a + b + c
    }
    return a + b
}
anyMesg(addAll(1, 3))

const sumAll = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c
}
anyMesg(sumAll(undefined, 3))

//* Rest Parameters

const total = (a: number, ...nums: number[]): number => {

    return a + nums.reduce((prev, sum) => prev + sum)
}
console.log(total(9, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infilityLoop = (a: number) => {
    while (true) {
        a++;
        if (a > 100) break
    }
}

//*custome type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

//*use of the never type
const numberOrString = (value: number | string): string => {
    if (isNumber(value)) return 'number';
    if (typeof value === 'string') return 'string';

    return createError("This should never happen!")
}



//*!  || CHAPTER - 3

let myName = "Aman";
console.log(myName)


let test = []
let bands: string[] = []
bands.push("Rajeev")

let myTuple: [string, number, boolean] = ['Dave', 42, true];

let mixed = ['John', 1, false]
mixed = myTuple

myTuple[2] = false

//Objects

let myObj: Object;
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Rajeev",
    prop2: true
}

exampleObj.prop1 = "raj"

/* type Guitarist = {
    name: string
    active?: boolean,
    albums: (string | number)[]
} */

/*
interface Guitarist {
    name?: string
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Rajeev",
    active: false,
    albums: ["23543", 1352, "325"]
}

let JP: Guitarist = {
    // name: "Jaxy",
    active: true,
    albums: ["#@5234", 325]
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return "Hello!"

}

console.log(greetGuitarist(JP))


//Enum 

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.A)
 */