const $ = (selector) => document.querySelector(selector)

const toggleClass = (selector, className) => $(selector).classList.toggle(className)

const lightTheme = () => {
    toggleClass("body", "light-theme")
    toggleClass(".light-off", "none")
    toggleClass(".light-on", "none")
}

const initializeProject = () => {
    $('.button-theme').addEventListener('click', () => {
        lightTheme()
    })
}

window.addEventListener("load", initializeProject)
