const button=(containerId, buttonText, idTag, size, btnPadding, btnColor, btnBg, btnBorder)=>{
    const button = document.createElement('button');
    
    button.id = idTag;
    button.textContent = buttonText || "tobetsa";
    button.style.fontSize = size || '16px'
    button.style.padding = btnPadding || "10px 20px"
    button.style.color = btnColor || '#ffff'
    button.style.backgroundColor = btnBg || 'orange'
    button.style.border = btnBorder || "none"
    button.style.cursor = "pointer"

    const target = document.getElementById(containerId)
    target.appendChild(button)
}

module.exports={button}
