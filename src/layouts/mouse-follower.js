const MyMouseFollower = function (MouseFollower, jQuery, gsap) {
  MouseFollower.registerGSAP(gsap);

  function init() {
    if(!isTouchEnabled()) {
      const cursor = new MouseFollower({
        skewing: 5,
        speed: 0.66,
        showTimeout: 1,
        stickDelta: .4
      });
    }
  }

  function isTouchEnabled() {
    return ( 'ontouchstart' in window );
  }

  return {
    init
  }
}

export default MyMouseFollower;
