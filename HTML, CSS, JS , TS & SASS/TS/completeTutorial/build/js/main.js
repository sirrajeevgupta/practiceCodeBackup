"use strict";
//*!  || CHAPTER - 7 ()
/*
//*!  || CHAPTER - 7 (Index Signatures & Keyof Assertions)

// interface transactionsObj {
//     [index: string]: number
// }

interface transactionsObj {
    [index: string]: number
    pizza: number,
    books: number,
    job: number
}

const todaysTransaction: transactionsObj = {
    pizza: -10,
    books: -5,
    job: 50
}

console.log(todaysTransaction.pizza)
console.log(todaysTransaction['pizza'])

const prop: string = 'pizza'
console.log(todaysTransaction[prop])


const todaysNet = (transactions: transactionsObj) => {

    let total = 0;

    for (const item in transactions) {
        total += transactions[item]
    }
    return total
}
console.log(todaysNet(todaysTransaction))
//console.log(todaysTransaction['dev'])


interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}
const student: Student = {
    name: "Rajeev",
    GPA: 7.8,
    classes: [100, 200]
}

//console.log(student.test)

for (const key in student) {
    console.log(`${key} : ${student[key as keyof Student]}`)

}

Object.keys(student).map(key => {
    console.log(`${key}: ${student[key as keyof typeof student]}`)
})

const logStudentKey = (student: Student, key: keyof typeof student) => {
    console.log(`student ${key}: ${student[key as keyof typeof student]}`)
}

logStudentKey(student, 'GPA')


// interface Incomes {
//     [index: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {

    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}


//*!  || CHAPTER - 6 (Classes)

class Coder {

    constructor(public name: string,
        private age: number,
        public isIntrovert: boolean,
        protected lang: string = 'TS',
        protected isAdult: boo
        lean = true,
    ) {

        this.name = name
        this.age = age
        this.isAdult = isAdult
        this.isIntrovert = isIntrovert
    }

    public introduce() {
        console.log(`Hey, my name is ${this.name}. I'm a ${this.age} years old ${this.age > 18 ? 'adult' : 'non-adult'},and I code in ${this.lang}.`)
    }
}

const myCoder = new Coder('Rajeev', 26, true)

myCoder.introduce()
// console.log(myCoder.lang)
// console.log(myCoder.age)

class WebDev extends Coder {

    constructor(
        public computer: string,
        name: string,
        age: number,
        isIntrovert: boolean,
    ) {
        super(name, age, isIntrovert)
        this.computer = computer
    }

    public getLang() {
        return `I code in ${this.lang}`
    }
}

const myWebDEv = new WebDev('Windows', 'Amit', 16, true)

myWebDEv.introduce()
console.log(myWebDEv.getLang())

interface Musician {
    name: string
    age: number
    isIntrovert: boolean
    play(action: string): string
}

class Guitarist implements Musician {

    name: string
    age: number
    isIntrovert: boolean

    constructor(name: string, age: number, isIntrovert: boolean) {
        this.name = name
        this.age = age
        this.isIntrovert = isIntrovert
    }

    play(action: string) {
        return `${this.name} ${action} the guitar`
    }
}

const newMus = new Guitarist('Rajeev', 26, true)
console.log(newMus.play("strums"))
///////////////////////////////////////////////////////////////

class Peeps {

    static count: number = 0;

    static getCount() {
        return Peeps.count
    }

    public id: number;

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}


const Harry = new Peeps('Harry');
const ron = new Peeps('ron');
const marry = new Peeps('marry');

console.log(Peeps.count)
console.log(Harry.id)
console.log(marry.id)
console.log(ron.id)

//////////////////////////////////////////////////////////////////////////


class Bands {

    dataState: string[]
    constructor() {
        this.dataState = []
    }

    get data(): string[] {

        return this.dataState
    }

    set data(value: string[]) {
        if (Array.isArray(value) && value.every(elem => typeof elem === "string")) {
            this.dataState = value
            return
        } else {
            throw new Error("Params are not an array of strings")
        }
    }
}

const myBand = new Bands()
myBand.data = ['rg', 'rrrey', 'rtey']
console.log(myBand.data)
myBand.data = [...myBand.data, 'new band']
console.log(myBand.data)
//myBand.data = ['Van helen', 453]


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
