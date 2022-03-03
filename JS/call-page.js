// Navbar
const closeBtn = document.getElementsByClassName("close-btn")[0]
const openBtn = document.getElementsByClassName("open-btn")[0]
const sidebar = document.getElementsByClassName("sidebar")[0]
function slowOpen() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw > 746) {
        document.querySelector("body").style.marginLeft = "16%"
    } 
    else if (vw <= 746) {
        document.querySelector("body").style.marginLeft = "25%" 
    }
}
function slowClose() {
    document.querySelector("body").style.marginLeft = "0%"
}
function width() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw > 746) {
        sidebar.style.width = "17.5%"
    } 
    else if (vw <= 746) {
        sidebar.style.width = "25%"
    }
}
closeBtn.addEventListener("click", ()=> {
    setTimeout(slowClose, 0)
    sidebar.style.width = "0%"
})
openBtn.addEventListener("click", ()=> {
    width()
    setTimeout(slowOpen, 1000)
    
})