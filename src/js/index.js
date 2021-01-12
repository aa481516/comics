import jsonData from './data.json';

let currentComic;

function getData() {
  const comicFromUrl = jsonData.find(
    (item) => `/${item.num}` === window.location.pathname,
  );

  currentComic = comicFromUrl || jsonData[0];
  return currentComic;
}

function getTransScript(transcript) {
  return transcript?.split('\n').join('<br/>');
}

(function getFromURL() {
  document.getElementById('comic').innerHTML = '<div>' + getData().day + '/' + getData().month + '/' + getData().year + '<img src="' + getData()?.img + '"/></div>';
  document.getElementById('text-transcript').innerHTML = getTransScript(getData().transcript || '' );
})();

function getRandomdata() {
  const selectedData = jsonData[Math.floor(Math.random() * jsonData.length)];
  if (
    selectedData.num === currentComic.num ||
    `/${selectedData.num}` === currentComic.num
  ) {
    return getRandomdata();
  }
  return selectedData;
}

// JS HTML API ////////////////////////////////////////////////// //
function goToFirst() {
  window.location.replace(`${window.location.origin}/${jsonData[0].num}`);
}

function goTolast() {
  window.location.replace(
    `${window.location.origin}/${jsonData[jsonData.length - 1].num}`,
  );
}

function goToRandom() {
  const randomData = getRandomdata()?.num;
  window.location.replace(`${window.location.origin}/${randomData}`);
}

function goToPrev() {
  const prevComic = jsonData.indexOf(currentComic) - 1;
  if (jsonData[prevComic]) {
    window.location.replace(
      `${window.location.origin}/${jsonData[prevComic].num}`,
    );
  }
}

function goToNext() {
  const nextComic = jsonData.indexOf(currentComic) + 1;
  if (jsonData[nextComic]) {
    window.location.replace(
      `${window.location.origin}/${jsonData[nextComic].num}`,
    );
  }
}

// for up buttons
document.getElementById('first-up').onclick = () => {
  goToFirst();
};

document.getElementById('last-up').onclick = () => {
  goTolast();
};

document.getElementById('random-up').onclick = () => {
  goToRandom();
};

document.getElementById('prev-up').onclick = () => {
  goToPrev();
};

document.getElementById('next-up').onclick = () => {
  goToNext();
};
// for down buttons
document.getElementById('first-down').onclick = () => {
  goToFirst();
};

document.getElementById('last-down').onclick = () => {
  goTolast();
};

document.getElementById('random-down').onclick = () => {
  goToRandom();
};

document.getElementById('prev-down').onclick = () => {
  goToPrev();
};

document.getElementById('next-down').onclick = () => {
  goToNext();
};

const getFooterData = () => {
  const numOfFooterComics = 4;
  let footerComics = '';
  for (let i = 0; i < numOfFooterComics; i++) {
    const comic = getRandomdata();
    footerComics += `<a href='${comic.num}'><img title='${comic.title}' src='${comic.img}'/></a>`;
  }
  return footerComics;
};

document.getElementById(
  'footer',
).innerHTML = `<div class='footer-content'>${getFooterData()}</div>`;
