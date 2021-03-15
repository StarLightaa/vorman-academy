import 'focus-visible'
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

import test from './test';

documentReady(() => {
  lazyImages();
});

test();
