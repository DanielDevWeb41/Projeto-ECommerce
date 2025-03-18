let bar = document.getElementById("bar")
let nav = document.getElementById("nv")

bar.onclick = () => {
    nav.classList.toggle("active")
}


//background Switch

let left = document.getElementById("left")
let right = document.getElementById("right")
let content = document.querySelector(".content")

right.onclick = function () {
    content.style.backgroundImage = "url(../img/hero-2.jpg)"
    left.style.color = "#e53637";
    right.style.color = "#000000";
}

left.onclick = function () {
    content.style.backgroundImage = "url(../img/hero-1.jpg)"
    right.style.color = "#e53637";
    left.style.color = "#000000";
}

// product switch

let links = document.querySelectorAll(".links h1")
let arrivals = document.querySelectorAll(".arrivals")
let hot = document.querySelectorAll(".hot")

links[1].onclick = function () {
    links[1].classList.add('act')
    links[0].classList.remove('act')
    links[3].classList.remove('act')

    hot.forEach((e) => {
        e.style.display = "none"
    })
    arrivals.forEach((e) => {
        e.style.display = "block"
    })
}

links[2].onclick = function () {
    links[2].classList.add('act')
    links[0].classList.remove('act')
    links[1].classList.remove('act')

    hot.forEach((e) => {
        e.style.display = "block"
    })
    arrivals.forEach((e) => {
        e.style.display = "none"
    })
}

links[0].onclick = function () {
    links[2].classList.remove('act')
    links[0].classList.add('act')
    links[1].classList.remove('act')

    hot.forEach((e) => {
        e.style.display = "block"
    })
    arrivals.forEach((e) => {
        e.style.display = "block"
    })
}

// timer

let counDownDate = new Date("mar 20,2025 23:33:50").getTime()

let counter = setInterval(() => {
    let dateNow = new Date().getTime() 

    let dateDiff = counDownDate - dateNow 

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) 
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)
    document.querySelector(".days").innerHTML = `${days}: `
    document.querySelector(".hours").innerHTML = `${hours}: `
    document.querySelector(".minutes").innerHTML = `${minutes}: `
    document.querySelector(".seconds").innerHTML = seconds

})

