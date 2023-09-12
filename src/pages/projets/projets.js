import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function projets() {
  let mm = gsap.matchMedia(),
    breakPoint = 768

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions

        gsap.from('.section--infinite', {
            y: '-90vh',
            ease: 'none',
            scrollTrigger: {
                trigger: '.section--footer',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: true
            }
        })
    }
  )
}
