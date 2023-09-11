import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


export default function footer()
{

    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        gsap.from('.footer__image-wrapper', {
            yPercent: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.container--footer-bottom',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })

    })
}