let menu = document.querySelectorAll(".menu li a")
menu.forEach((el) => {
    el.addEventListener('click', () => {
        for (let item of menu) {
            item.classList.remove('active')
        }
        el.classList.add('active')
    })
})
let colors = ['#fc5f45', '#44c99b', '#b27cf5', '#feb960']
let colorsThree = ['#44c99b', '#fc5f45', '#b27cf5']
let colorsRGB = ['252, 95, 69, 0.32', '68, 201, 155, 0.32', '178, 124, 245, 0.32', '254, 185, 96, 0.32']
let ourFocus__item = document.querySelectorAll('.ourFocus__item')
let ourTeam__block = document.querySelectorAll('.ourTeam__block')
let ourTeam__name = document.querySelectorAll('.ourTeam__name')
let stat__circle = document.querySelectorAll('.stat__circle')
let buttonPricing = document.querySelectorAll('.button-pricing')
let pricing__block = document.querySelectorAll('.pricing__block')
let stat__number = document.querySelectorAll('.stat__number')
let workSteps__block = document.querySelectorAll('.work-steps__block')
let workSteps__about = document.querySelectorAll('.work-steps__about')
let pricing__blockPrice = document.querySelectorAll('.pricing__block-price')
let readFullBlog = document.querySelectorAll('.readFull-blog')
let blog__name = document.querySelectorAll('.blog__name')
let triangleUp = document.getElementById('triangle-up')
let about_person = document.getElementById('about_person')
let ourTeam_about_person__title = document.getElementById('ourTeam-about_person__title')
let ourTeam_about_person__text = document.getElementById('ourTeam-about_person__text')
let ourTeam__bgImg = document.querySelectorAll('.ourTeam__bgImg')
let ourFocus__img = document.querySelectorAll('.ourFocus__img .bi')
for (let i = 0; i < ourFocus__item.length; i++) {
    ourFocus__img[i].style.color = colors[i]
    ourTeam__name[i].style.color = colors[i]
    ourTeam__bgImg[i].style.background = `linear-gradient(to top, ${colors[i]}, #212121)`
    stat__circle[i].style.background = `${colors[i]}`
    blog__name[i].style.color = `${colors[i]}`
    readFullBlog[i].style.color = `${colors[i]}`
    ourFocus__item[i].style.setProperty('--sq-color', colors[i])
    ourTeam__block[i].style.setProperty('--sq-color', colors[i])
    stat__circle[i].style.setProperty('--fill-background', colors[i])
    workSteps__about[i].style.setProperty('--fill-background', colors[i])
}
for (let i = 0; i < colorsThree.length; i++) {
    pricing__blockPrice[i].style.background = `${colorsThree[i]}`
    buttonPricing[i].style.setProperty('--color-button', colorsThree[i])
    pricing__block[i].style.setProperty('--color-button', colorsThree[i])
    pricing__blockPrice[i].style.setProperty('--color-button', colorsThree[i])
}
let i = 1
workSteps__block.forEach(el => {
    el.querySelector('.work-steps__image').style.backgroundImage = `linear-gradient(to top, rgba(${colorsRGB[i-1]}), #26273285)`
    el.querySelector('.number-work').innerHTML = `0${i}`
    i++
})
let blog__block = document.querySelectorAll('.blog__block')
let blog__active = document.getElementById('blog__active')
let blogName = document.getElementById('blog-name')
let blog__imgActive = document.getElementById('blog__img-active')
let readFullBlogActive = document.getElementById('readFull-blog-active')
readFullBlogActive.addEventListener('click', (e) => {
    e.preventDefault()
})
let blog = document.getElementById('blog')
readFullBlog.forEach((el,id) => {
    el.addEventListener('click', (e) => {
        document.getElementById('blog__text').innerHTML = blog__block[id].querySelector('.blog__text').innerHTML
        blogName.innerText = blog__block[id].querySelector('.blog__name span').innerHTML
        document.getElementById('blog__date').innerText = blog__block[id].querySelector('.blog__date').innerHTML
        document.getElementById('blog__title').innerText = blog__block[id].querySelector('.blog__title').innerHTML
        let wind = window.getComputedStyle(blog__block[id].querySelector('.blog__name span'))
        blogName.style.color = wind.color
        blog__imgActive.src = blog__block[id].querySelector('.blog__img').src
        for(let item of blog__block) {
            item.style.flex = "1 1 100%"
        }
        blog__active.style.display = 'block'
        blog.style.flex = "1 1 50%"
        for(let item of blog__block) {
            item.style.display = 'block'
        }
        e.preventDefault();
        document.getElementById('blog__text').querySelector('.readFull-blog').remove()
        blog__block[id].style.display = 'none'
    })
})
let backgroundVideo = document.getElementById("background-video")
let playVideo = document.getElementById('play-video')
let block_bgVideo = document.getElementById('block_bgVideo')
let pauseVideo = () => {
    if (backgroundVideo.paused) {
        backgroundVideo.play()
        block_bgVideo.style.display = 'none'
    } else {
        backgroundVideo.pause()
        block_bgVideo.style.display = 'flex'
    }
}
playVideo.addEventListener('click', () => {
    pauseVideo()
})
backgroundVideo.addEventListener('click', () => {
    pauseVideo()
})
ourTeam_about_person__title.innerHTML = `About ${ourTeam__block[0].querySelector('.ourTeam__name').innerHTML}`
ourTeam_about_person__text.innerHTML = `${ourTeam__block[0].querySelector('.ourTeam__textInfo').innerHTML}`
ourTeam__block.forEach(el => {
    el.addEventListener('click', () => {
        ourTeam_about_person__title.innerHTML = `About ${el.querySelector('.ourTeam__name').innerHTML}`
        ourTeam_about_person__text.innerHTML = `${el.querySelector('.ourTeam__textInfo').innerHTML}`
    })
})
window.addEventListener('scroll', function(el) {
    checkScrollWind()
  });
let checkNum = true
  function checkScrollWind() {
    if(window.pageYOffset > document.getElementById('scrollAbout').offsetTop) {
        if(checkNum) {
            let number = [12458, 1796, 1000, 1500]
        for (let i = 0; i < stat__number.length; i++) {
            let j = number[i] - 500
            setInterval(() => {
                if(j<=number[i]) {
                stat__number[i].innerHTML = j++
                }
            }, 1);
        }
        checkNum = false
        }
    }
  }
  checkScrollWind()

let sliderColors = ['#fc5f45', '#44c99b', '#b27cf5', '#feb960']
let linearGradient = document.querySelectorAll('.linearGradient')
let testimonals__blockProf = document.querySelectorAll('.testimonals__block-prof')
let testimonials__blockInfo = document.querySelectorAll('.testimonials__block-info')
let testimonialsCircle__block = document.getElementById('testimonials-circle__block')
let num = 0
for(let i = 0; i<linearGradient.length; i++) {
    let div = document.createElement('div')
    testimonialsCircle__block.appendChild(div)
    div.classList.add('circle__block')
}
let testimonials__block = document.querySelectorAll('.testimonials__block')
let circle__block = document.querySelectorAll('.circle__block')
let testimonals__blockText = document.querySelectorAll('.testimonals__block-text')
circle__block[0].classList.add("active")
let clickID = 0
let clearInt
circle__block.forEach((el, id) => {
    el.addEventListener('click', () => {
        clearTimeout(clearInt)
        for(let item of testimonals__blockText) {
            item.style.maxHeight = '90px'
        }
        if(id > clickID) {
            for(let i = clickID; i < id; i++) {
                testimonials__block[i].style.left = '-1200px'
            }
            testimonials__block[clickID].style.left = '-1200px'
        }
        else {
            for(let i = id; i < clickID; i++) {
                testimonials__block[i].style.left = '1200px'
            }
            testimonials__block[clickID].style.left = '1200px'
        }
        for(let item of circle__block) {
            item.classList.remove('active')
        }
        el.classList.add('active')
        for(let item of testimonials__block) {
            item.classList.remove('active')
        }
        testimonials__block[id].classList.add('active')
        testimonials__block[id].style.left = '0'
        clickID = id
        clearInt = setTimeout(() => {
            for(let item of testimonals__blockText) {
                item.removeAttribute('style')
            }
        }, 300);
    })
})
for(let item of linearGradient) {
    testimonials__blockInfo[num].style.setProperty('--color--testi', sliderColors[num % sliderColors.length])
    circle__block[num].style.setProperty('--color-circle', sliderColors[num % sliderColors.length])
    linearGradient[num].style.background = `linear-gradient(to top, ${sliderColors[num % sliderColors.length]}, #212121)`
    testimonals__blockProf[num].style.color = `${sliderColors[num % sliderColors.length]}`
    num++
}
let menu__bar = document.getElementById('menu__bar')
let menuDisplay = document.getElementById('menu')
menu__bar.addEventListener('click', () => {
    menu__bar.classList.toggle('active')
    menuDisplay.classList.toggle('active')
})