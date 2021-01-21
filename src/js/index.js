import jsonData from './data.json';
import { clickOnElement, setInElement, windowLocationReplace } from './HTMLAPIService';
import { getFromURL, getRandomdata, getFooterData, goToPrev, goToNext } from './dataControll';

// get first data
(getFromURL)();

// for up buttons
clickOnElement('first-up', () => windowLocationReplace(jsonData[0].num));
clickOnElement('last-up',  () => windowLocationReplace(jsonData[jsonData.length - 1].num));
clickOnElement('random-up', () => windowLocationReplace(getRandomdata()?.num));
clickOnElement('prev-up', goToPrev);
clickOnElement('next-up', goToNext);

// for down buttons
clickOnElement('first-down', () => windowLocationReplace(jsonData[0].num));
clickOnElement('last-down', () => windowLocationReplace(jsonData[jsonData.length - 1].num));
clickOnElement('random-down', () => windowLocationReplace(getRandomdata()?.num));
clickOnElement('prev-down', goToPrev);
clickOnElement('next-down', goToNext);

setInElement('footer', 'innerHTML', `<div class='footer-content'>${getFooterData()}</div>`);
