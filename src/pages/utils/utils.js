import gsap from 'gsap'

export default function utils()
{
    let rowTl = gsap.timeline({ repeat: -1 })
    .to('.utils__text--top', {
        xPercent: -100,
        duration: 30,
        ease: 'none'
    }, 0)
    .to('.utils__text--center', {
        xPercent: 100,
        duration: 30,
        ease: 'none'
    }, 0)
    .to('.utils__text--bottom', {
        xPercent: -100,
        duration: 30,
        ease: 'none'
    }, 0)  

    let iconTl = gsap.timeline({ repeat:-1 })
    .to('.utils__icon-text', {
        rotation: 360,
        duration: 10,
        ease: 'none'
    })
    

}