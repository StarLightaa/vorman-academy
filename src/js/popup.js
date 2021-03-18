import closestAttr from './helpers/closestAttr';
import closestItemByClass from './helpers/closestItemByClass';

export default () => {
  let body = document.querySelector('body');

  const showPopup = function(target) {
    target.classList.add('is-active');
  }
  const closePopup = function(target) {
      target.classList.remove('is-active');
  }

  body.addEventListener('click', function(e) {
    let target = e.target;
    let popupClass = closestAttr(target, 'data-popup');

    if(popupClass === null) {
      return;
    }

    e.preventDefault();
    let popup = document.querySelector('.' + popupClass);
    if(popup) {
        showPopup(popup);
        body.classList.toggle('no-scroll');
    }
  })

  body.addEventListener('click', function(e) {
    let target = e.target;

    if(target.classList.contains('popup-close') ||
      target.classList.contains('popup__inner')) {
      let popup = closestItemByClass(target, 'popup');
      closePopup(popup);
      body.classList.toggle('no-scroll');
    }
  })
};

