const html = document.querySelector("html")
const checkBox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
     window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-tex"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColor = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key]))
}

checkBox.addEventListener("change", ({target}) => {
    target.checked ? changeColor(darkMode) : changeColor(initialColors)
})