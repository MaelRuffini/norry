import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function homeScroll() {
  let mm = gsap.matchMedia(),
    breakPoint = 768

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions

      gsap.from('.home-showreel__embed', {
        scale: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-showreel__wrapper',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      })

      let cards = gsap.utils.toArray('.home-card__wrapper')
      let cardsRotation = cards.slice(1)
      let spacer = 20

      if (document.querySelector('.home-avis__cl-wrapper')) {
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} 10%`,
            endTrigger: '.home-avis__cl-wrapper',
            end: `bottom bottom`,
            pin: true,
            // pinSpacing: false,
            invalidateOnRefresh: true,
          })
        })
      }

      gsap.to('.home-card__icon', {
        rotation: 360 * 3,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-avis__cl-wrapper',
          start: 'top bottom',
          end: `bottom top`,
          scrub: true,
        },
      })

      gsap.to('.home-video__cover', {
        rotation: 360 * 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-video__cover',
          start: 'top bottom',
          end: `bottom top`,
          scrub: true,
        },
      })

      let homeAvisText = new SplitText('.home-avis__title', { type: 'lines' })
      gsap.from(homeAvisText.lines, {
        yPercent: 40,
        opacity: 0,
        duration: 0.4,
        ease: 'Quart.aseInOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: homeAvisText.lines,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.home-contact__title', {
        yPercent: 40,
        opacity: 0,
        duration: 0.4,
        ease: 'Quart.aseInOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.home-contact__title',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  )
}
