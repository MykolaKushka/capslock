'use strict';

const fixedHeader = () => {
  const fixedHeaderCheck = () => {
    const header = document.querySelector('.header-main');

    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', function () {
    fixedHeaderCheck();
  });

  fixedHeaderCheck();
};

export default fixedHeader;
