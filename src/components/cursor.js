import gsap from 'gsap'

export default function cursor()
{

    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {

        // Setup cursor
        let cursor = document.querySelector('.cursor')

        window.addEventListener('mousemove', (e) => {

            let cursorTl = gsap.timeline()
            .to(cursor, {
              duration: 0.7,
              x: e.clientX,
              y: e.clientY,
            })

        })

        let cursorRotationTl = gsap.timeline({ paused: true, repeat: -1 })
        .to('.cursor__text', {
            rotation: 360,
            duration: 10,
            ease: 'none'
        })


        // Home hero hover
        let homeHeroWrapper = document.querySelector('.home-hero__hover-wrapper')
        if(homeHeroWrapper)
        {
            let homeHeroCursorTl = gsap.timeline({ paused: true })
            .to(cursor, {
                width: '8rem',
                height: '8rem',
                duration: 0.4,
                ease: 'Quart.easeInOut'
            }, 0)
            .to('.cursor__icon, .cursor__text', {
                opacity: 1,
                duration: 0.4,
                ease: 'Quart.easeInOut'
            }, 0)

            homeHeroWrapper.addEventListener('mouseenter', () =>
            {
                homeHeroCursorTl.play()
                cursorRotationTl.play()
            })

            homeHeroWrapper.addEventListener('mouseleave', () =>
            {
                homeHeroCursorTl.reverse()
                cursorRotationTl.pause()
            })

        }

        // Home footer hover
        let footerWrapper = document.querySelector('.home-contact__wrapper')

        if(footerWrapper)
        {
            let footerCursorTl = gsap.timeline({ paused: true })
            .to(cursor, {
                width: '8rem',
                height: '8rem',
                backgroundColor: '#ff8a00',
                duration: 0.4,
                ease: 'Quart.easeInOut'
            }, 0)
            .to('.cursor__icon, .cursor__text', {
                opacity: 1,
                duration: 0.4,
                ease: 'Quart.easeInOut'
            }, 0)

            footerWrapper.addEventListener('mouseenter', () =>
            {
                footerCursorTl.play()
                cursorRotationTl.play()
            })

            footerWrapper.addEventListener('mouseleave', () =>
            {
                footerCursorTl.reverse()
                cursorRotationTl.pause()
            })
        }

    
        let links = document.querySelectorAll('a')
        links.forEach(item => {

            let cursorTl = gsap.timeline({ paused: true })
            .fromTo('.cursor', {
                scale: 1,
            }, {
                scale: 1.5,
                duration: 0.4,
                ease: 'Quart.easeInOut'
            })

            item.addEventListener('mouseenter', () => {
                cursorTl.play()
            })

            item.addEventListener('mouseleave', () => {
                cursorTl.reverse()
            })
        })

    })

}
