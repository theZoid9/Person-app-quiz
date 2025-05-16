const header=()=>{
    const header= document.createElement('header')

    header.style.padding="25px"
    header.backgroundColor="#ffff"
    header.style.color="#000000"
    header.textContent="Brain Tease"
    return header
}

module.exports={header}