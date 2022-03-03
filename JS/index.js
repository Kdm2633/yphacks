const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target/speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
})

var closeBtn = document.getElementsByClassName("close-btn")[0]
var openBtn = document.getElementsByClassName("open-btn")[0]
var everything = document.querySelector("everything")
var nav = document.getElementsByClassName("nav")[0]
var sidebar = document.getElementsByClassName("sidebar")[0]
var bars = document.getElementsByClassName("fa-bars")[0]


closeBtn.addEventListener("click", ()=> {
    setTimeout(slowClose, 0)
    sidebar.style.width = "0%"
})


openBtn.addEventListener("click", ()=> {
    setTimeout(slowOpen, 1000)
    sidebar.style.width = "17.5%"
})


function slowOpen() {
    document.querySelector("body").style.marginLeft = "16%"
}

function slowClose() {
    document.querySelector("body").style.marginLeft = "0%"
}