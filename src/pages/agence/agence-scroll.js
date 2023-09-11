import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function agencescroll()
{

    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

      let { isDesktop, isMobile } = context.conditions

      let agenceRows = document.querySelectorAll('.agence-hero__row')
      agenceRows.forEach(item => {
        gsap.from(item, {
          opacity: isDesktop ? 0 : 1,
          y: isDesktop ? '3rem' : 0,
          duration: 1,
          ease: 'Quart.easeInOut',
          scrollTrigger:{
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
          }
        })
      })

      let agenceCards = document.querySelectorAll('.agence-cards__card')
      agenceCards.forEach(item => {
        gsap.from(item, {
          opacity: isDesktop ? 0 : 1,
          y: isDesktop ? '3rem' : 0,
          duration: 0.7,
          ease: 'Quart.easeInOut',
          scrollTrigger:{
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
          }
        })
      })

      // gsap.fromTo('.agence-hero__image-wrapper', {
      //   rotation: -10,
      //   ease: 'none',
      // }, {
      //     rotation: 20,
      //     ease: 'none',
      //     scrollTrigger: {
      //         trigger: '.agence-hero__wrapper',
      //         start: 'top tlop',
      //         end: `bottom top`,
      //         scrub: true,
      //       },
      // })


    })
}