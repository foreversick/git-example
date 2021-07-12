import { name, sayName, loadNames } from './js/support.js'

console.log('This JS script is running!')

console.log(`Importing variable from another js: ${name}`)

console.log(sayName('Meza Zamora'))

const button = document.querySelector('#js-tryout');

const people = [
    {name: "Alejandro", 
    age: 25,
    email: "alex@gmail.com"
    },
    {name: "Jessica", 
    age: 22,
    email: "jess@gmail.com"
    },
    {name: "Vero", 
    age: 24,
    email: "vero@outlook.com"
    }
]

const names = [...people].map(person => {
    return person.name
})

console.log(names)

button.addEventListener('click', () => {
    loadNames(names)
})