const $ = (selector) => document.querySelector(selector)

const toggleClass = (selector, className) => $(selector).classList.toggle(className)
const showPanel = () => $(".panel-container").style.display = "block"
const hidePanel = () => $(".panel-container").style.display = "none"
const hideElement = (selector) => $(selector).classList.add("none")
const showElement = (selector) => $(selector).classList.remove("none")

const lightTheme = () => {
    toggleClass("body", "light-theme")
    toggleClass(".light-off", "none")
    toggleClass(".light-on", "none")
}
const showPanelImage = () =>{
    showPanel()
    hideElement(".panel-text")
    showElement(".panel-image")
}
const showPanelText = () =>{
    showPanel()
    hideElement(".panel-image")
    showElement(".panel-text")
}

const initializeProject = () => {
    // Modo oscuro / modo claro 
    $('.button-theme').addEventListener('click', () => {
        lightTheme()
    })

    // Abrir y cerrar panel de imagen 
    $(".button-image").addEventListener('click', () => {
        showPanelImage()
    })

    $(".panel-button").addEventListener('click', () => {
        hidePanel()
    })

    // Abrir y cerrar panel de texto
    $(".button-text").addEventListener('click', () => {
        showPanelText()
    })
}

window.addEventListener("load", initializeProject)
