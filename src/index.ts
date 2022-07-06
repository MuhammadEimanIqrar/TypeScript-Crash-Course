// Source: https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia

// Basic Types:

let id: number = 5
// console.log('ID:', id)
let Company: string = 'Solution Mission'
let isPublished: boolean = true
let x: any = 'Assalam u Alaikum'
x = 3

// Array:
let ids:  number[] = [1,2,3,5,8]
let arr: any[] = [1, 'Muhammad Eiman Iqrar', true]

// Tuple's:
let person: [number, string, boolean] = [1, 'Makkah', true]

// Tuple Array:
let employee: [number, string][] = [
    [1, 'Muhammad Eiman Iqrar'],
    [2, 'Muhammad Rumman Iqrar'],
    [3, 'Muhammad Azan Iqrar'],
]

// Unions:
let pid: string | number
pid = 22

// Enum's:

// Numeric
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

// String
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// console.log(Direction1.Left)
// console.log(Direction2.Left)

// Objects:
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'Muhammad Eiman Iqrar',
}

// Type Assertion:
let cid: any = 1

// Two Ways: to do Type Assertion:
// let customerId = <number>cid
// let customerId = cid as number

// Functions:
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces:

// with Object's
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Muhammad Eiman Iqrar',
}

// with Function's:
interface mathFunction {
    (x: number, y: number): number
}

const add: mathFunction = (x: number, y: number): number => x + y
const sub: mathFunction = (x: number, y: number): number => x - y

// Classes:

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(): string {
        return `${this.name} is now registered`
    }
}

const eiman = new Person(1, 'Muhammad Eiman Iqrar')
const rumman = new Person(1, 'Muhammad Rumman Iqrar')

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(1, 'Muhammad Eiman Iqrar', 'Developer')

// console.log(emp.register())

// Generics:
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5,6])
let strArray = getArray<string>(['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'])
