//              Show Menu
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById("nav_close"),
      navLink = document.querySelectorAll('.nav_link')

//              Menu-Show
navToggle.addEventListener( 'click', ()=>{
    navMenu.classList.add('show_menu')
})

//              Menu-Close-Close-Btn
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show_menu')
})

//              Menu-Close-Link
navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
    })
})

//          Change Header Color
function chngHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >=100)header.classList.add('scroll_header');else header.classList.remove('scroll_header')
}

window.addEventListener('scroll',chngHeader)

//          Discover - Slider
var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween:22,
    coverflowEffect: {
      rotate: 0,
    },
  });


//          Video

const video = document.getElementById('video_file'),
      video_btn = document.getElementById('video_button'),
      video_icon = document.getElementById('video_button_icon')

function playpause(){
    if(video.paused){
        video.play()
        // chng icon
        video_icon.classList.add('ri-pause-line')
        video_icon.classList.remove('ri-play-line')
    }else{
        video.pause()
        // chng icon
        video_icon.classList.remove('ri-pause-line')
        video_icon.classList.add('ri-play-line')

    }
}

video_btn.addEventListener('click' , playpause)

function vidEnd(){
    // chngs icon when video ends
    video_icon.classList.remove('ri-pause-line')
    video_icon.classList.add('ri-play-line')
}

video.addEventListener('ended', vidEnd)


//              Show - Scroll Up

function getscroll(){
    
    const scroll = document.getElementById('scroll_up')
    if(this.scrollY>=560){
        scroll.classList.add('scroll_up_show')
    }else{
        scroll.classList.remove('scroll_up_show')
    }

}

window.addEventListener('scroll',getscroll)


//              Highlight Active - Link

const sections = document.querySelectorAll('section[id]');

function activelink(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const top = current.offsetTop-100;
        const height = current.offsetHeight;
        const id = current.getAttribute('id')
        // console.log(top,height,id)

        if(scrollY>top && scrollY<top+height){
            document.querySelector('.nav_menu a[href*='+id+']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*='+id+']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',activelink)

//              Dark Theme

const themeButton = document.getElementById('theme_icon')
const darkTheme = 'dark_theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//              Scroll  Reveal  

const sr =  ScrollReveal({
    distance: '65px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home_data,.home_social_link, .home_info,
.discover_container,
.experience_data, .experience_overlay,
.place_card,
.sponsor_content,
.footer_data`,{
    origin: 'top',
    interval: 80,
})

sr.reveal(`.about_data, 
           .video_description,
           .subscribe_description`,{
    origin: 'left',
})

sr.reveal(`.about_img_overlay, 
           .video_content,
           .subscribe_form`,{
    origin: 'right',
    interval: 80,
})
