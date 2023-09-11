import gsap from 'gsap'

export default function contactHover()
{

    let mm = gsap.matchMedia(),
    breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {

        let { isDesktop, isMobile } = context.conditions

        let rightCells = gsap.utils.toArray('.home-contact__cells-row--right')
        let leftCells = gsap.utils.toArray('.home-contact__cells-row--left')

        rightCells.forEach(cell => {

            let cellLoop = cell.querySelectorAll('.home-contact__cells-loop')

            let cellTl = gsap.timeline({ repeat: -1 })
            .to(cellLoop, {
                xPercent: 100,
                duration: 60,
                ease: 'none'
            })
        })

        leftCells.forEach(cell => {

            let cellLoop = cell.querySelectorAll('.home-contact__cells-loop')

            let cellTl = gsap.timeline({ repeat: -1 })
            .to(cellLoop, {
                xPercent: -100,
                duration: 60,
                ease: 'none'
            })
        })

    })
}