import jsonData from './data.json';
import { setInElement, windowLocationReplace } from './HTMLAPIService';

let currentComic;

function getData() {
  const comicFromUrl = jsonData.find(
    (item) => `/${item.num}` === window.location.pathname,
  );

  currentComic = comicFromUrl || jsonData[0];
  return currentComic;
}

export function getTransScript(transcript) {
  return transcript?.split('\n').join('<br/>');
}

export function getFromURL() {
  setInElement(
    'comic',
    'innerHTML',
    '<div>' + getData().day + '/' + getData().month + '/' + getData().year + '<img src="' + getData()?.img + '"/></div>',
  );
  setInElement(
    'text-transcript',
    'innerHTML',
    getTransScript(getData().transcript || '' )
  );
};

export function getRandomdata() {
  const selectedData = jsonData[Math.floor(Math.random() * jsonData.length)];
  if (
    selectedData.num === currentComic.num ||
    `/${selectedData.num}` === currentComic.num
  ) {
    return getRandomdata();
  }
  return selectedData;
}

export const getFooterData = () => {
  const numOfFooterComics = 4;
  let footerComics = '';
  for (let i = 0; i < numOfFooterComics; i++) {
    const comic = getRandomdata();
    footerComics += `<a href='${comic.num}'><img title='${comic.title}' src='${comic.img}'/></a>`;
  }
  return footerComics;
};

export function goToPrev() {
  const prevComic = jsonData.indexOf(currentComic) - 1;
  if (jsonData[prevComic]) {
    windowLocationReplace(jsonData[prevComic].num);
  }
}

export function goToNext() {
  const nextComic = jsonData.indexOf(currentComic) + 1;
  if (jsonData[nextComic]) {
    windowLocationReplace(jsonData[nextComic].num);
  }
}
