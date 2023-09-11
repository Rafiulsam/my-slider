const images = [
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg",
    "images/pic-5.jpg",
    "images/pic-6.jpg",
    "images/pic-7.jpg",
    "images/pic-8.jpg",
    "images/pic-9.jpg",
    "images/pic-10.jpg",
    "images/pic-11.jpg",
    "images/pic-12.jpg",
    "images/pic-13.jpg",
    "images/pic-14.jpg",
    "images/pic-15.jpg",
    "images/pic-16.jpg"
]

let imgIndex = 0

const imgEl = document.getElementById("slider-image")
setInterval(() => {
    if (images.length === imgIndex) {
        imgIndex = 0
    }
    const aImage = images[imgIndex]
    imgEl.setAttribute('src', aImage)
    imgIndex++

}, 1000)