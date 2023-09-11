import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function video()
{

    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        gsap.fromTo(
            '.home-video__text-wrapper',
            {
              rotation: -12.5,
              ease: 'none',
            },
            {
              rotation: 12.5,
              scrollTrigger: {
                trigger: '.home-video__cover',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )

        let videoTextTl = gsap.timeline({ repeat: -1 })
        .to('.home-video__text--top', {
            xPercent: -100,
            duration: 30,
            ease: 'none'
        }, 0)
        .to('.home-video__text--bottom', {
            xPercent: 100,
            duration: 30,
            ease: 'none'
        }, 0)


        let videoButton = document.querySelector('.home-video__mask')
        let video = document.querySelector('.home-video-video')

        let videoHoverTl = gsap.timeline({ paused: true })
        .to('.home-video__cover', {
            opacity: 0,
            duration: 0
        }, 0)

        videoButton.addEventListener('mouseenter', () => { videoHoverTl.play() })
        videoButton.addEventListener('mouseleave', () => { videoHoverTl.reverse() })


        let videoClickTl = gsap.timeline({ paused: true, reversed: true })
        .from('.home-video__mask', {
            width: isDesktop ? '20.8rem' : '20rem',
            height: isDesktop ? '20.8rem' : '13rem',
            borderRadius: isDesktop ? '100%' : 9,
            duration: 1,
            ease: 'Quart.easeInOut'
        }, 0)
        .to('.home-video__button', {
            opacity: 0,
            duration: 0.4,
            ease: 'Quart.easeInOut'
        }, 0)

        videoButton.addEventListener('click', () => {
            if(videoClickTl.reversed())
            {
                videoClickTl.play()
                video.currentTime = 0
                video.play()
                document.querySelector('.home-video__cover').style.display = 'none'
            } else{
                videoClickTl.reverse()
                video.pause()
                setTimeout(() => {
                    document.querySelector('.home-video__cover').style.display = 'flex'
                }, 1000)
            }
        })

        window.addEventListener('scroll', () => {
            if(!videoClickTl.reversed()){
                videoClickTl.reverse()
                video.pause()
                setTimeout(() => {
                    document.querySelector('.home-video__cover').style.display = 'flex'
                }, 1000)
            }
        })

    })
}