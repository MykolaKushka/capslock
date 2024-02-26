'use strict';

const appears = () => {
  if (
    typeof document.querySelector('.animated-section') != 'undefined' &&
    document.querySelector('.animated-section') != null
  ) {
    const imageContainers = document.querySelectorAll('.animated-section');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.querySelector('.fade-up-image')) {
            const fadeImages = entry.target.querySelectorAll('.fade-up-image');
            fadeImages.forEach((el) => {
              el.style.opacity = 1;
              el.style.transform = 'translateY(0px)';
            });
          }

          observer.unobserve(entry.target);
        }
      });
    }, options);

    imageContainers.forEach((el) => {
      observer.observe(el);
    });
  }
};

export default appears;
