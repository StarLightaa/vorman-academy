import 'focus-visible'
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

import popup from './popup';
import tariff from './tariff';

documentReady(() => {
  lazyImages();
});

popup();
tariff();
