import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'

import header from './components/header'
import footer from './components/footer'
import cursor from './components/cursor'
import projetsParallax from './components/projets-parallax'
import contactHover from './components/contact-hover'
import video from './components/video'
import transition from './components/ transition'

import home from './pages/home/home'
import homeScroll from './pages/home/home-scroll'
import cards from './pages/home/cards'
import agence from './pages/agence/agence'
import agencescroll from './pages/agence/agence-scroll'
import projets from './pages/projets/projets'
import cs from './pages/cs/cs'
import swiper from './pages/cs/swiper'
import utils from './pages/utils/utils'

gsap.registerPlugin(ScrollTrigger)

// Scroll
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

sessionStorage.setItem('scroll', 'start')

document.querySelector('.header-button__wrapper').addEventListener('click', () => {
    let scroll = sessionStorage.getItem('scroll')
    if (scroll === 'start') {
      lenis.stop()
      sessionStorage.setItem('scroll', 'stop')
    } else {
      lenis.start()
      sessionStorage.setItem('scroll', 'start')
    }
  })

// Init
function main() {
  cursor()
  transition()

  const isHome = document.querySelector('.body').classList.contains('body--home')
  if (isHome) {
    header()
    footer()
    home()
    homeScroll()
    cards()
    projetsParallax()
    contactHover()
    video()

    lenis.options.infinite = false
  }

  const isProjets = document.querySelector('.body').classList.contains('body--projets')
  if (isProjets) {
    header()
    footer()
    projetsParallax()
    contactHover()
    projets()

    lenis.options.infinite = true
  }

  const isAgence = document.querySelector('.body').classList.contains('body--agence')
  if (isAgence) {
    header()
    footer()
    video()
    agence()
    agencescroll()

    lenis.options.infinite = false
  }

  const isCs = document.querySelector('.body').classList.contains('body--cs')
  if (isCs) {
    header()
    footer()
    cs()
    swiper()

    lenis.options.infinite = false
  }

  const isMl = document.querySelector('.body').classList.contains('body--ml')
  if (isMl) {
    header()
    footer()

    lenis.options.infinite = false
  }

  const isUtils = document.querySelector('.body').classList.contains('body--utils')
  if (isUtils) {
    header()
    utils()

    lenis.options.infinite = false
  }
}

main()


let loadingStatus = sessionStorage.getItem('status')
      if(loadingStatus) {
        document.querySelector('.loader__wrapper').style.display = 'none'
      } else {
        let loadingTl = gsap.timeline()
        .from('.loader__lottie',{
            scale: 2,
            duration: 2,
            ease: 'Quart.easeInOut',
          },0)
        .to('.loader__wrapper', {
            backgroundColor: '#ff8a00',
            duration: 2,
            ease: 'Quart.easeInOut',},0)
        .to('.loader__wrapper',{
            yPercent: -100,
            duration: 1.2,
            ease: 'Quart.easeInOut',
          }, 2)

          sessionStorage.setItem('status', 'loaded')
      }