const $ = (selector) => document.querySelector(selector)

const toggleClass = (selector, className) => $(selector).classList.toggle(className)
const showPanel = () => $(".panel-container").style.display = "block"
const hidePanel = () => $(".panel-container").style.display = "none"
const hideElement = (selector) => $(selector).classList.add("none")
const showElement = (selector) => $(selector).classList.remove("none")
let sizeText = parseInt(window.getComputedStyle($(".top-text")).getPropertyValue("font-size"))

// Imagen
const backgroundImage = (e) => $(".meme-img").style.backgroundImage = `url("${e.target.value}")`
const backgroundColor = (e) => $(".meme-img").style.backgroundColor = e.target.value
const colorPicker = (selector) => $(selector).setAttribute("data-color", `${($(selector).value).toUpperCase()}`)
const backgroundBlendMode = (e) => $(".meme-img").style.backgroundBlendMode = e.target.value
const filtersMeme = () => $(".meme-img").style.filter = `blur(${$("#blur").value}px) brightness(${$("#brightness").value}) contrast(${$("#contrast").value}%) grayscale(${$("#grayscale").value}%) hue-rotate(${$("#hue-rotate").value}deg) invert(${$("#invert").value}) opacity(${$("#opacity").value}) saturate(${$("#saturate").value}%) sepia(${$("#sepia").value}%)`
const reset = (selector, initialValue=0) => $(selector).value = initialValue
// Texto
const writeText = (paragraph ,text) => $(paragraph).innerText = $(text).value
const alignText = (align) => {
    $(".top-text").style.textAlign = align
    $(".bottom-text").style.textAlign = align
}
const backgroundTransparent = () => {
    $(".top-text").style.backgroundColor = "transparent"
    $(".bottom-text").style.backgroundColor = "transparent"
}
const position = (valuePosition) =>{
    $(".top-text").style.position = valuePosition
    $(".bottom-text").style.position = valuePosition
}
const textStroke = (color) => {
    $(".top-text").style.webkitTextStroke = `1px ${color}`
    $(".bottom-text").style.webkitTextStroke = `1px ${color}`
}
// Descargar meme
const downloadMeme = () => {
    domtoimage.toBlob($(".meme")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

// Modo oscuro - modo claro 
const lightTheme = () => {
    toggleClass("body", "light-theme")
    toggleClass(".light-off", "none")
    toggleClass(".light-on", "none")
}
// Paneles
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
// Resetear filtros
const resetFiltersMeme = () =>{
    reset("#brightness", 1)
    reset("#opacity", 1)
    reset("#contrast", 100)
    reset("#blur")
    reset("#grayscale")
    reset("#sepia")
    reset("#hue-rotate")
    reset("#saturate", 100)
    reset("#invert")
    filtersMeme()
}
const fonts = (property, id) => {
    if (property === "fontSize"){
        $(".top-text").style[property] = `${$(id).value}px`
        $(".bottom-text").style[property] = `${$(id).value}px`
    }else if (property === "padding"){
        $(".top-text").style[property] = `${$(id).value}px 16px`
        $(".bottom-text").style[property] = `${$(id).value}px 16px`
    }else 
        $(".top-text").style[property] = $(id).value
        $(".bottom-text").style[property] = $(id).value
}
const checkBackgroundTransparent = () => {
    if ($("#background-transparent").checked){
        backgroundTransparent()
        position("absolute")
        $(".bottom-text").style.bottom = "0"
    } else {
        position("relative")
        fonts("backgroundColor", "#background-color")
    }
}

const initializeProject = () => {
    // Visualizar tamaño de fuente en el input (por el cambio de tamaño en las media queries) 
    $("#text-font-size").setAttribute("value", sizeText)

    // Modo oscuro - modo claro 
    $('.button-theme').addEventListener('click', lightTheme)

    // Abrir panel de imagen 
    $(".button-image").addEventListener('click', showPanelImage)

    // Abrir  panel de texto
    $(".button-text").addEventListener('click', showPanelText)

    //Cerrar panel
    $(".panel-button").addEventListener('click', hidePanel)

    //Imagen
    $("#url-input").addEventListener("input", backgroundImage)

    $("#colors-input").addEventListener("input", backgroundColor)

    $("#colors-input").addEventListener("input", () =>{
        colorPicker("#colors-input")
    })

    $("#colors-select").addEventListener("change", backgroundBlendMode)

    // Filtros
    $("#brightness").addEventListener("input", filtersMeme)
    $("#opacity").addEventListener("input", filtersMeme)
    $("#contrast").addEventListener("input", filtersMeme)
    $("#blur").addEventListener("input", filtersMeme)
    $("#grayscale").addEventListener("input", filtersMeme)
    $("#sepia").addEventListener("input", filtersMeme)
    $("#hue-rotate").addEventListener("input", filtersMeme)
    $("#saturate").addEventListener("input", filtersMeme)
    $("#invert").addEventListener("input", filtersMeme)

    $("#reset-filters").addEventListener("click", resetFiltersMeme)

    // Texto
    $("#text-top-text").addEventListener("input", () => {
        writeText(".top-text", "#text-top-text")
    })
    $("#text-bottom-text").addEventListener("input", () => {
        writeText(".bottom-text", "#text-bottom-text")
    })

    $("#check-top-text").addEventListener("change", () => {     
        toggleClass(".top-text", "none")
    })
    $("#check-bottom-text").addEventListener("change", () => {
        toggleClass(".bottom-text", "none")
    })
    /* Otra manera de hacerlo
    $("#check-top-text").addEventListener("input", (e) => {
        (e.target.checked) ? hideElement(".top-text") : showElement(".top-text")
    })*/

    $("#text-font-family").addEventListener("change", () => {
        fonts("fontFamily", "#text-font-family")
    })
    $("#text-font-size").addEventListener("input", () => {
        fonts("fontSize", "#text-font-size")
    })
    $("#text-font-size").addEventListener("input", () => {
        fonts("fontSize", "#text-font-size")
    })
    $("#align-left").addEventListener("click", () => {
        alignText("left")
    })
    $("#align-center").addEventListener("click", () => {
        alignText("center")
    })
    $("#align-right").addEventListener("click", () => {
        alignText("right")
    })
    $("#text-color").addEventListener("input", () => {
        fonts("color", "#text-color")
        colorPicker("#text-color")
    })
    $("#background-color").addEventListener("input", () => {
        checkBackgroundTransparent()
        colorPicker("#background-color")
    })
    $("#background-transparent").addEventListener("change", checkBackgroundTransparent)
    $("#stroke-unset").addEventListener("click", () => {
        textStroke("transparent")
    })
    $("#stroke-light").addEventListener("click", () => {
        textStroke("white")
    })
    $("#stroke-dark").addEventListener("click", () => {
        textStroke("black")
    })
    $("#padding").addEventListener("input", () => {
        fonts("padding", "#padding")
    })
    $("#line-height").addEventListener("change", () => {
        fonts("line-height", "#line-height")
    })

    // Descargar meme
    $("#download-meme").addEventListener("click", downloadMeme)
}

window.addEventListener("load", initializeProject)
