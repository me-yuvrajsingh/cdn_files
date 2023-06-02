var swipeElements = document.querySelectorAll('.swipe-up, .swipe-up-big, .swipe-down, .swipe-down-big, .swipe-right, .swipe-right-big, .swipe-left, .swipe-left-big');
  
  // JavaScript for animating the swipe animations on load and scroll
  function animate() {

    for (var i = 0; i < swipeElements.length; i++) {
      var swipeElement = swipeElements[i];
      var elementRect = swipeElement.getBoundingClientRect();
      var isVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

      if (isVisible) {
        swipeElement.style.opacity = '1';
        swipeElement.style.transform = 'translate(0, 0)';
      } else {
        swipeElement.style.opacity = '0';
        swipeElement.style.transform = getInitialTransform(swipeElement.classList);
      }
    }
  }

  // Get initial transform value based on the swipe direction class
  function getInitialTransform(classList) {
    if (classList.contains('swipe-up')) {
        return 'translateY(40px)';
    } else if (classList.contains('swipe-down')) {
        return 'translateY(-40px)';
    } else if (classList.contains('swipe-down-big')) {
        return 'translateY(-150px)';
    } else if (classList.contains('swipe-right')) {
        return 'translateX(-40px)';
    } else if (classList.contains('swipe-right-big')) {
        return 'translateX(-100px)';
    } else if (classList.contains('swipe-left')) {
        return 'translateX(40px)';
    } else if (classList.contains('swipe-left-big')) {
        return 'translateX(100px)';
    } else if (classList.contains('swipe-up-big')) {
        return 'translateY(300px)';
    }
  }

  window.addEventListener('load', animate);
  window.addEventListener('scroll', animate);