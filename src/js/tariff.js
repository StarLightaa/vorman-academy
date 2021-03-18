import closestItemByClass from './helpers/closestItemByClass';

export default () => {
  console.log('test');
  let tariff = document.querySelector('.js-tariff');

  if(tariff === null) {
    return;
  }

  let changeTariffInfo = function(target) {
    let tariff = closestItemByClass(target, 'tariff-card');
    let pay = document.querySelector('.popup-pay');

    let tariffTitleItem = tariff.querySelector('.tariff-card__title');
    let tariffPriceItem = tariff.querySelector('.tariff-card__price');

    let tariffTitle = tariffTitleItem ? tariffTitleItem.textContent : '';
    let tariffPrice = tariffPriceItem ? tariffPriceItem.textContent : '';

    pay.querySelector('.js-tariff-title').textContent = 'Тариф' + tariffTitle;
    pay.querySelector('.js-tariff-price').textContent = tariffPrice;
  }

  tariff.addEventListener('click', function(e) {
    var target = e.target;
    if(target.classList.contains('tariff-card__btn')) {
      e.preventDefault();
      changeTariffInfo(target);
    }
  })
};
