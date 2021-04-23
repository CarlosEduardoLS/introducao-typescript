//String, Number & Boolean

let message: string = 'Hello World'

message.toUpperCase()

function showInformation(): string {
  return 'cataline'
}

let total: number = 10
total = 10.5

let isOpen: boolean = false

//Null, Undefined, Any & Void

let isNull: null = null

let isUndefined: undefined = undefined

let stock: any = 89

stock = null

let isVoid: void = undefined

function showConsole(): void {
  console.log('Cataline')
}

function showParamInformation(name: string = 'Carlos'): void {
  console.log(name)
}

//Error,  Never & Promise

let newError: Error = new Error('error')

function error(): never {
  throw new Error('error')
}

// function waitShowConsole(): Promise<void> {
//   console.log('Cataline')
// }

//Array, Tuple & Enum

let items: Array<string> = ['3', '4', 'cataline']

let items2: number[] = [1, 2, 3, 4]

let tupla: [number, string, boolean] = [1, 'cataline', true]

enum Colors {
  white = '#fff',
  black = '#000',
}

let white: Colors = Colors.white

//Type Union

let age: number | string

age = 20

age = 'vinte'

function showPet(pet: 'dog' | 'cat') {
  console.log(pet)
}

showPet('cat')

showPet('dog')

//Type Aliases
type Pet = 'dog' | 'cat'

function showPet2(pet: Pet) {
  console.log(pet)
}

function displayPet(pet: Pet) {
  console.log(pet)
}

showPet2('cat')
displayPet('dog')

//Type Inference

let message2 = 'Cataline'

window.addEventListener('click', event => {
  console.log(event.target)
})

//Type Assertion

const inputName = document.querySelector('#name') as HTMLInputElement

inputName.value
