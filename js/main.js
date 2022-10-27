import { initCards } from './card.js';
import { getOffers } from './data.js';
import { switchStatePage } from './page.js';

switchStatePage(true);

const data = getOffers();

initCards(data);
