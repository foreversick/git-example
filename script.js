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

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
*/

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json()
console.log(data)

const { userId, title } = data;
console.log(`User ID: ${userId}, ${title}`)

// Promise.all
const responses = await Promise.all(
    [
        fetch('https://jsonplaceholder.typicode.com/todos/2'),
        fetch('https://jsonplaceholder.typicode.com/todos/3')
    ]
)

const dataPromises = responses.map(result => result.json())
const finalData = await Promise.all(dataPromises)
console.log(finalData)