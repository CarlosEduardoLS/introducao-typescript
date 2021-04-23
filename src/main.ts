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

//Interfaces

type UF = 'PE' | 'SP' | 'MG'

interface User {
  name: string
  address: {
    city: string
    UF: UF
  }
}

function showCity(user: User) {
  user.address.UF = 'MG'
  return user.address.city
}

//Propriedades Opicionais

interface User2 {
  name: string
  address?: {
    city: string
    UF: UF
  }
}

function showCity2(user: User2) {
  return user.address ? user.address.city : 'Não existe'
}

function showCity3(user: User2) {
  return user.address?.city
}

//Propriedades Readonly

interface User3 {
  readonly name: string
  age: number
}

let user2: User3 = {
  name: 'Yung Silva',
  age: 22,
}

user2.age = 23
// user2.name = 'João Silva' -> não é possível alterar o valor

//Extends -> 'Unir 2 intefaces' e Implements -> 'Criar uma classe à partir de uma interface'

interface Veiculo {
  rodas: number
  acelerar: () => void
  frear: () => void
  marchaRe?: () => void
}

interface Moto extends Veiculo {
  capacete: boolean
  empinar: () => void
}

let bross: Moto = {
  rodas: 2,
  capacete: true,
  acelerar: () => console.log('Acelerar'),
  empinar: () => console.log('Empinar'),
  frear: () => console.log('Frear'),
}

bross.acelerar = () => {
  console.log('Acelerar mais rápido')
}

class CriarVeiculo implements Veiculo {
  rodas: number

  constructor(rodas: number) {
    this.rodas = rodas
  }

  acelerar() {
    console.log('Acelerar')
  }

  frear() {
    console.log('Acelerar')
  }
}

//Pick & Omit

interface Post {
  id: number
  title: string
  description: string
  shortDescription: string
  slug: string
  comments: any[]
  likes: number
  views: number
  shares: number
}

type PickPreview = Pick<Post, 'id' | 'title'>
type OmitPreview = Omit<Post, 'id'>

let pick: PickPreview
let omit: OmitPreview
