import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'


export default function swiper() {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        // loop: true,
        slidesPerView: '1.2',
        spaceBetween: 5,
        centeredSlides: true,
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: '1.8',
                spaceBetween: 30,
                centeredSlides: true,
            },
        }
      })

}
