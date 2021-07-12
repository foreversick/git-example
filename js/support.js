export const name = "Alejandro Meza"

export function sayName(name) {
    return `My name is ${name}`
}


export function loadNames(names){
    const dynamicContent = document.querySelector('#dynamic-content')

    dynamicContent.innerHTML = ''

    const df = new DocumentFragment();
    names.forEach(name => {
        let p = document.createElement('P')
        p.textContent = name
        df.appendChild(p)
    })
    dynamicContent.appendChild(df)
}