import gsap from 'gsap'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)

export default function header()
{
    let mm = gsap.matchMedia(),
    breakPoint = 992

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        let buttons = gsap.utils.toArray('.button__wrapper')
        
        buttons.forEach(button => {

            let buttonEnterTl = gsap.timeline({ paused: true, repeat:-1 })
            .to(button.querySelectorAll('.button__text--hover'), {
                xPercent: isDesktop ? -100 : 0,
                duration: 2,
                ease: 'none'
            })

            button.addEventListener('mouseenter', () =>
            {
                button.querySelector('.button__loop-wrapper').style.opacity = 1
                button.querySelector('.button__text').style.opacity = 0
                buttonEnterTl.restart()
            })
 
            button.addEventListener('mouseleave', () =>
            {
                button.querySelector('.button__loop-wrapper').style.opacity= 0
                button.querySelector('.button__text').style.opacity = 1
                buttonEnterTl.pause()
            })

        })


        let navLinks = gsap.utils.toArray('.header__nav-link-wrapper')
        
        navLinks.forEach(navLink => {

            let navLinkTl = gsap.timeline({ paused: true })
            .to(navLink.querySelector('.header__nav-link'),{
                yPercent: -140,
                duration: 0.6,
                ease: 'Quart.easeInOut'
            }, 0)
            .to(navLink.querySelector('.header__nav-link--hover'),{
                yPercent: -140,
                duration: 0.6,
                ease: 'Quart.easeInOut'
            }, 0)

            navLink.addEventListener('mouseenter', () => { navLinkTl.play() })
            navLink.addEventListener('mouseleave', () => { navLinkTl.reverse() })

        })

        
        let burgerBtn = document.querySelector('.header-button__wrapper')

        let burgerTl = gsap.timeline({ paused: true, reversed: true })
        .to('.header__wrapper--mobile',
        {
            display: 'block',
            duration: 0,
            ease: 'none'
        }, 0)
        .from('.header__wrapper--mobile',
        {
            yPercent: -100,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.header-button__icon-dot--top',
        {
            y: '0.3rem',
            duration: 0.6,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.header-button__icon-dot--bottom-left',
        {
            x: '-0.35rem',
            y: '-0.35rem',
            opacity: 0,
            yPercent: 35,
            duration: 0.6,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.header-button__icon-dot--bottom-right',
        {
            x: '0.35rem',
            y: '-0.35rem',
            opacity: 0,
            yPercent: 35,
            duration: 0.6,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.header-button__icon-wrapper', {
            rotation: 360,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0.2)

        burgerBtn.addEventListener('click', () => { burgerTl.reversed() ? burgerTl.play() : burgerTl.reverse() })
    
    })

}