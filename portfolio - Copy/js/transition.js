
function pageTransition() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: .5, scaleY: 1});
  tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
}
function contentAnimation() {

  var aboutAnimation = gsap.timeline();
  aboutAnimation.from('.about-head', { duration: .5, translateY: 20, opacity: 0, delay: 1 });
  aboutAnimation.from('.about-text', { duration: .5, translateX: 20, opacity: 0  });
  

  var contactAnimationHead = gsap.timeline();
  var contactAnimationText = gsap.timeline();
  var contactAnimationInput = gsap.timeline();
  var contactAnimationButton = gsap.timeline();
  var contactSocialAnimationIcons = gsap.timeline();
  contactAnimationHead.from('.form-heading',{duration: .5, translateX: 20, opacity: 0, delay: 1})
  contactAnimationText.from('.form-above-text',{duration: .5, translateY: -20, opacity: 0, delay: 1.1})
  contactAnimationInput.from('.form-input',{duration: .5, translateX: -20, opacity: 0, stagger: .2, delay: 1.2})
  contactAnimationButton.from('.form-button',{duration: 1, translateY: 20, opacity: 0, delay: 1.3})
  contactSocialAnimationIcons.from('.fa',{duration: .5, translateY: -20, opacity: 0, delay: 1, stagger: .15})


}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }




  $(function() {

    barba.init({
  
      sync: true,
  
      transitions: [{
  
        async leave(data) {
          
          const done = this.async();
          
          pageTransition();
          await delay(1000);
          done();
  
        },
  
        async enter(data) {
          contentAnimation();
        },
  
        async once(data) {
          contentAnimation();
        }
  
      }]
    });
  
  });

