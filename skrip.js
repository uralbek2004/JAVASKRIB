
function btn() {
    let orqafon = document.getElementById("color").value

    document.body.style.background = orqafon
    
}

function createSnow(){
    const snow = document.createElement('i')
    snow.classList.add("fas")
    snow.classList.add("fa-snowflake")

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s"
    snow.style.opacity = Math.random()
    
    document.body.appendChild(snow)

    setTimeout(() => {
        snow.remove()
    }, 4000); //1000 = 1s / 4000 = 4s
}

setInterval(createSnow, 5)