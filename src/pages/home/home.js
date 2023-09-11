import gsap from 'gsap'

export default function home()
{
    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        let homeLoadingTl = gsap.timeline()
        .from('.home-hero__hover', {
            y: '55rem',
            duration: 1,
            ease: 'Quart.easeInOut',
            stagger: 0.1,
            delay: 2.8
        }, 0)
        .from('.home-hero__logo', {
            opacity: 0,
            y: '2rem',
            duration: 0.6,
            ease: 'Quart.easeInOut',
            delay: 2.8
        }, 0)
        .from('.home-hero__title', {
            opacity: 0,
            y: '2rem',
            duration: 0.6,
            ease: 'Quart.easeInOut',
            delay: 3
        }, 0)

        let showreel = document.querySelector('.home-showreel__video')

        if(showreel){
            let playPromise = showreel.play()
            
            if (playPromise !== undefined) {
                    playPromise.then(_ => {
                    })
                    .catch(error => {
                    });
                  }
        } else {
        }

        let projetsVideos = document.querySelectorAll('.home-projets__embed')

        projetsVideos.forEach(item => {

            let video = item.querySelector('.home-projets__video')
            
            video.addEventListener('mouseenter', () => {
                video.play()
            })

            video.addEventListener('mouseleave', () => { video.load() })

        })

    })

}
