const view1 = document.getElementById('view1')
const view2 = document.getElementById('view2')
const view3 = document.getElementById('view3')
const view4 = document.getElementById('view4')

view1.style.display = 'none'
view2.style.display = 'none'
view2.style.display = 'none'
view4.style.display = 'flex'


const initApp = () => {
    const debounceButton = document.getElementById('debounce')
    const debounceInput = document.getElementById('debounceInput')
    const throttleButton = document.getElementById('throttle')

    //debounceButton.addEventListener('click', debounce(clickLog, 2000))
    //debounceInput.addEventListener('keypress', debounce(typeLog, 1000))

    //throttleButton.addEventListener('click', throttle(clickLog, 2000))
    window.addEventListener('scroll', throttle(scrollLog, 1500))

}

const clickLog = () => console.log("Clicked")
const typeLog = () => console.log("API triggered")
const scrollLog = () => console.log("scrolling")

document.addEventListener('DOMContentLoaded', initApp)

const debounce = (func, delay) => {

    let id
    console.log(`id at immediate load: ${id}`)

    return () => {
        console.log(`Previous id: ${id}`)
        if (id) clearTimeout(id)
        id = setTimeout(() => {
            func()
        }, delay)
    }
}


const throttle = (func, delay) => {
    let lastTime = 0
    console.log("called throttle immediately")
    let id = 0

    return (...args) => {
        const now = new Date().getTime()
        id++
        if (now - lastTime < delay) return;
        lastTime = now;
        console.log(`event id: ${id}`)
        func(...args)
    }
}


