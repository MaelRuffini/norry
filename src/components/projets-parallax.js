import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function projetsParallax()
{

    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        let cardsProjets = gsap.utils.toArray('.home-projets__cl-item')

        gsap.fromTo(cardsProjets[0],{
            y: isDesktop ? '5rem' : 0,
            }, {
            y: isDesktop ? '-3rem' : 0,
            scrollTrigger: {
                trigger: cardsProjets[0],
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        gsap.fromTo(cardsProjets[1],{
            y: isDesktop ? '3rem' : 0,
        },{
            y: isDesktop ? '-12rem' : 0,
            scrollTrigger: {
                trigger: cardsProjets[1],
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        gsap.fromTo(cardsProjets[2],{
            y: isDesktop ? '3rem' : 0,
        }, {
            y: isDesktop ? '-8rem' : 0,
            scrollTrigger: {
                trigger: cardsProjets[2],
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        gsap.fromTo(cardsProjets[3],{
            y: isDesktop ? '2rem' : 0,
        },  {
            y: isDesktop ? '-15rem' : 0,
            scrollTrigger: {
                trigger: cardsProjets[3],
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        gsap.to(cardsProjets[4],{
            y: isDesktop ? '-8rem' : 0,
            scrollTrigger: {
                trigger: cardsProjets[4],
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        gsap.fromTo(cardsProjets[5],{
            y: isDesktop ? '1rem' : 0,
        }, {
            y: isDesktop ? '-12rem' : 0,
            scrollTrigger: {
                trigger: cardsProjets[5],
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        let buttons = gsap.utils.toArray('.button__wrapper--home-projets')
        
        buttons.forEach(button => {

            let buttonEnterTl = gsap.timeline({ paused: true, repeat:-1 })
            .to(button.querySelectorAll('.button__text-wrapper--loop'), {
                xPercent: -100,
                duration: 4,
                ease: 'none'
            })

            button.addEventListener('mouseenter', () =>
            {
                button.querySelector('.button__loop-wrapper--home-projets').style.opacity = 1
                button.querySelector('.button__text-wrapper').style.opacity = 0
                buttonEnterTl.restart()
            })
 
            button.addEventListener('mouseleave', () =>
            {
                button.querySelector('.button__loop-wrapper--home-projets').style.opacity= 0
                button.querySelector('.button__text-wrapper').style.opacity = 1
                buttonEnterTl.pause()
            })

        })

    })
}
