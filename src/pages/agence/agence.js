import gsap from 'gsap'

export default function agence()
{

    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let agenceHeroTl = gsap.timeline({ repeat: -1 })
        .to('.agence-hero__title', {
            xPercent: -100,
            ease: 'none',
            duration: 25,
        })

        let cards = document.querySelectorAll('.card__wrapper')
        cards.forEach(item => {
            let cardTl = gsap.timeline({ paused: true, reversed: true })
            .to(item.querySelector('.agence-team__card-wrapper'), {
                rotationY: '180deg', 
                duration: 1.8,
                ease: 'Quart.easeInOut'
            }, 0)
            .to(item.querySelector('.card__verso'), {
                rotationY: '0', 
                duration: 1.8,
                ease: 'Quart.easeInOut'
            }, 0)

            item.addEventListener('click', () => { cardTl.reversed() ? cardTl.play() : cardTl.reverse() })

        })


        window.addEventListener('mousemove', (e) => {
            gsap.to('.agence-hero__image-wrapper', {
                duration: 1,
                rotation: e.clientX / 400,
                x: e.clientX / 20,
                y: e.clientY / 35
            })

            gsap.to('.agence-team__card-wrapper--left', {
                duration: 1,
                rotation: e.clientX / 400,
                x: - e.clientX / 20,
                y: e.clientY / 35
            })

            gsap.to('.agence-team__card-wrapper--center', {
                duration: 1,
                rotation: e.clientX / 450,
                x: e.clientX / 30,
                y: - e.clientY / 35
            })

            gsap.to('.agence-team__card-wrapper--right', {
                duration: 1,
                rotation: e.clientX / 350,
                x: - e.clientX / 40,
                y: - e.clientY / 25
            })
        })

    })
}