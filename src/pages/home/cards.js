import gsap from 'gsap'

export default function cards()
{
    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        let hoverOne = document.querySelector('.home-hero__hover--one')
        let hoverTwo = document.querySelector('.home-hero__hover--two')
        let hoverThree = document.querySelector('.home-hero__hover--three')

        let cardOne = document.querySelector('.home-hero__card--one')
        let cardTwo = document.querySelector('.home-hero__card--two')
        let cardThree = document.querySelector('.home-hero__card--three')

        let cardOneTl = gsap.timeline({ paused: true, reversed: true })
        .to('.home-hero__card--one', {
            display: 'flex',
            duration: 0,
            ease: 'none'
        }, 0)
        .to('.home-hero__hover-background--one', {
            scaleX: isDesktop ? 3 : 1,
            scaleY: isDesktop ? 1 : 3,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__hover--two', {
            xPercent: isDesktop ? 200 : 0,
            yPercent: isDesktop ? 0 : 200,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__hover--three', {
            xPercent: isDesktop ? 100 : 0,
            yPercent: isDesktop ? 0 : 100,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__image-wrapper', {
            yPercent: isDesktop ? -100 : 0,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 1)
        .to('.home-hero__image', {
            yPercent: isDesktop ? 100 : 0,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 1)
        .from('.home-hero__card--one', {
            opacity: 0,
            duration: 0.4,
            ease: 'Quart.easeInOut'
        }, 1)

        hoverOne.addEventListener('click', () => { cardOneTl.reversed() ? cardOneTl.play() : cardOneTl.reverse() })
        document.querySelector('.home-hero__card-button--one').addEventListener('click', () => { hoverOne.click() })



        let cardTwoTl = gsap.timeline({ paused: true, reversed: true })
        .to('.home-hero__card--two', {
            display: 'flex',
            duration: 0,
            ease: 'none'
        }, 0)
        .to('.home-hero__hover-background--two', {
            scaleX: isDesktop ? 3 : 1,
            scaleY: isDesktop ? 1 : 3,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__hover--one', {
            xPercent: isDesktop ? -100 : 0,
            yPercent: isDesktop ? 0 : -100,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__hover--three', {
            xPercent: isDesktop ? 100 : 0,
            yPercent: isDesktop ? 0 : 100,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__image-wrapper', {
            yPercent: isDesktop ? -100 : 0,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 1)
        .to('.home-hero__image', {
            yPercent: isDesktop ? 100 : 0,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 1)
        .from('.home-hero__card--two', {
            opacity: 0,
            duration: 0.4,
            ease: 'Quart.easeInOut'
        }, 1)

        hoverTwo.addEventListener('click', () => { cardTwoTl.reversed() ? cardTwoTl.play() : cardTwoTl.reverse() })
        document.querySelector('.home-hero__card-button--two').addEventListener('click', () => { hoverTwo.click() })
        

        let cardThreeTl = gsap.timeline({ paused: true, reversed: true })
        .to('.home-hero__card--three', {
            display: 'flex',
            duration: 0,
            ease: 'none'
        }, 0)
        .to('.home-hero__hover-background--three', {
            scaleX: isDesktop ? 3 : 1,
            scaleY: isDesktop ? 1 : 3,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__hover--one', {
            xPercent: isDesktop ? -100 : 0,
            yPercent: isDesktop ? 0 : -100,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__hover--two', {
            xPercent: isDesktop ? -200 : 0,
            yPercent: isDesktop ? 0 : -200,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-hero__image-wrapper', {
            yPercent: isDesktop ? -100 : 0,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 1)
        .to('.home-hero__image', {
            yPercent: isDesktop ? 100 : 0,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 1)
        .from('.home-hero__card--three', {
            opacity: 0,
            duration: 0.4,
            ease: 'Quart.easeInOut'
        }, 1)

        hoverThree.addEventListener('click', () => { cardThreeTl.reversed() ? cardThreeTl.play() : cardThreeTl.reverse() })
        document.querySelector('.home-hero__card-button--three').addEventListener('click', () => { hoverThree.click() })


        gsap.to('.home-showreel__wrapper', {
            scrollTrigger:{
               trigger: '.home-showreel__wrapper',
               start: 'top top',
               end: 'bottom top',
               toggleActions: "play pause reverse reset",
               onEnter: () => {
                   cardOneTl.reversed() ? '' : cardOneTl.reverse()
                   cardTwoTl.reversed() ? '' : cardTwoTl.reverse()
                   cardThreeTl.reversed() ? '' : cardThreeTl.reverse()
               }
            }   
           })

    })
}
