const footer=()=>{
    const footer = document.createElement("footer")

    footer.style.backgroundColor = "#333"
    footer.style.color = "white"
    footer.style.padding = "10px"
    footer.style.textAlign = "center"
    footer.style.position = "fixed"
    footer.style.bottom = "0"
    footer.style.width = "100%"
    footer.textContent = "© 2025 Brain Tease - All Rights Reserved";
    return footer
}

module.exports={footer}