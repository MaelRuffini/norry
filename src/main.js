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

import home from './pages/home/home'
import homeScroll from './pages/home/home-scroll'
import cards from './pages/home/cards'
import agence from './pages/agence/agence'
import agencescroll from './pages/agence/agence-scroll'
import cs from './pages/cs/cs'
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

document
  .querySelector('.header-button__wrapper')
  .addEventListener('click', () => {
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
  }

  const isProjets = document.querySelector('.body').classList.contains('body--projets')
  if (isProjets) {
    header()
    footer()
    projetsParallax()
    contactHover()
  }

  const isAgence = document.querySelector('.body').classList.contains('body--agence')
  if (isAgence) {
    header()
    footer()
    video()
    agence()
    agencescroll()
  }

  const isCs = document.querySelector('.body').classList.contains('body--cs')
  if (isCs) {
    header()
    footer()
    cs()
  }

  const isMl = document.querySelector('.body').classList.contains('body--ml')
  if (isMl) {
    header()
    footer()
  }

  const isUtils = document.querySelector('.body').classList.contains('body--utils')
  if (isUtils) {
    header()
    utils()
  }
}

main()

let loadingTl = gsap
  .timeline()
  .from(
    '.loader__lottie',
    {
      scale: 2,
      duration: 2,
      ease: 'Quart.easeInOut',
    },
    0
  )
  .to(
    '.loader__wrapper',
    {
      backgroundColor: '#ff8a00',
      duration: 2,
      ease: 'Quart.easeInOut',
    },
    0
  )
  .to(
    '.loader__wrapper',
    {
      yPercent: -100,
      duration: 1.2,
      ease: 'Quart.easeInOut',
    },
    2
  )
