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
    showElement(".panel-image")
}
const hidePanelImage = () =>{
    hidePanel()
    hideElement(".panel-image")
}

const initializeProject = () => {
    $('.button-theme').addEventListener('click', () => {
        lightTheme()
    })

    $(".button-image").addEventListener('click', () => {
        showPanelImage()
    })

    $(".panel-button").addEventListener('click', () => {
        hidePanelImage()
    })
}

window.addEventListener("load", initializeProject)
