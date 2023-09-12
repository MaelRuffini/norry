import gsap from 'gsap'

export default function transition() {
  let mm = gsap.matchMedia(),
    breakPoint = 768

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {

      let { isDesktop, isMobile } = context.conditions

      let transitionTrigger = $(".transition__trigger");
      let introDurationMS = 0;
      let exitDurationMS = 1000;
      let excludedClass = "no-transition";

      // On Page Load
      if (transitionTrigger.length > 0) {
      	transitionTrigger.click();
      	$("body").addClass("no-scroll-transition");
      	setTimeout(() => {$("body").removeClass("no-scroll-transition");}, introDurationMS);
      }
      // On Link Click
      $("a").on("click", function (e) {
        if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 &&
            !$(this).hasClass(excludedClass) && $(this).attr("target") !== "_blank" && transitionTrigger.length > 0) {
          e.preventDefault();
      		$("body").addClass("no-scroll-transition");
          let transitionURL = $(this).attr("href");
          transitionTrigger.click();
          setTimeout(function () {window.location = transitionURL;}, exitDurationMS);
        }
      });
      // On Back Button Tap
      window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
      // Hide Transition on Window Width Resize
      setTimeout(() => {$(window).on("resize", function () {
      setTimeout(() => {$(".transition__wrapper").css("display", "none");}, 50);});
      }, introDurationMS);

      

    }
  )
}
