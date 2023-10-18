const $ = (selector) => document.querySelector(selector)

const toggleClass = (selector, className) => $(selector).classList.toggle(className)
const showPanel = () => $(".panel-container").style.display = "block"
const hidePanel = () => $(".panel-container").style.display = "none"
const hideElement = (selector) => $(selector).classList.add("none")
const showElement = (selector) => $(selector).classList.remove("none")
const imageBackground = (e) => $(".meme-img").style.backgroundImage = `url("${e.target.value}")`

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
    // Modo oscuro - modo claro 
    $('.button-theme').addEventListener('click', lightTheme)

    // Abrir panel de imagen 
    $(".button-image").addEventListener('click', showPanelImage)

    // Abrir  panel de texto
    $(".button-text").addEventListener('click', showPanelText)

    //Cerrar panel
    $(".panel-button").addEventListener('click', hidePanel)

    //Imagen
    $("#url-input").addEventListener("input", imageBackground)
}

window.addEventListener("load", initializeProject)
