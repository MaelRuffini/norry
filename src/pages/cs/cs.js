import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


export default function cs() {
  let mm = gsap.matchMedia(),
    breakPoint = 768

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions

      let csLoadingTl = gsap.timeline()
        .from('.cs-hero__col', {
            opacity: 0,
            y: '3rem',
            duration: 1,
            ease: 'Quart.easeInOut',
            stagger: 0.1,
        }, 0)
        .from('.cs-hero__image-wrapper', {
            opacity: 0,
            y: '3rem',
            duration: 1,
            ease: 'Quart.easeInOut',
        }, 0.5)

      let csImageWrapper = document.querySelectorAll('.cs-grid__image-wrapper')
      csImageWrapper.forEach(item => {

        let csBtnTl = gsap.timeline({ paused: true })
        .to('.cs-hero__button-icon', {
            x: '2rem',
            duration: 0.8,
            ease: 'Quart.easeInOut',
        })
        document.querySelector('.cs-hero__button-wrapper').addEventListener('mouseenter', () => { csBtnTl.play() })
        document.querySelector('.cs-hero__button-wrapper').addEventListener('mouseenter', () => { csBtnTl.reverse() })


        gsap.from(item, {
            scale: isDesktop ?  0.5 : 1,
            duration: 1,
            ease: 'Quart.easeOut',
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(item.querySelector('.cs-grid__image'), {
            scale: isDesktop ? 1.5 : 1,
            duration: 1,
            ease: 'Quart.easeOut',
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        })
      })

      gsap.from('.cs-grid__swiper-wrapper', {
        scale: isDesktop ?  0.5 : 1,
        duration: 1,
        ease: 'Quart.easeOut',
        scrollTrigger: {
            trigger: '.cs-grid__swiper-wrapper',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    })

    gsap.from('.swiper', {
        scale: isDesktop ? 1.5 : 1,
        duration: 1,
        ease: 'Quart.easeOut',
        scrollTrigger: {
            trigger: '.cs-grid__swiper-wrapper',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    })

      gsap.from('.cs-outis__wrapper', {
        opacity: isDesktop ? 0 : 1,
        y: isDesktop ? '5rem' : 0,
        duration: 1.2,
        ease: 'Quart.easeInOut',
        scrollTrigger:{
            trigger: '.cs-outis__wrapper',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
      })

      gsap.from('.cs-defis__wrapper', {
        opacity: isDesktop ? 0 : 1,
        y: isDesktop ? '5rem' : 0,
        duration: 1.2,
        ease: 'Quart.easeInOut',
        scrollTrigger:{
            trigger: '.cs-defis__wrapper',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
      })

      gsap.to('.cs-card__icon', {
        rotate: 360,
        ease: 'none',
        scrollTrigger: {
            trigger: '.cs-avis__wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
      })

    }
  )
}
