export function clickOnElement(selector, callBack, type='id') {
  if (type === 'id') {
    return document.getElementById(selector).onclick = callBack;
  }

  return document.getElementsByClassName(selector).onclick = callBack;
}

export function setInElement(selector, contentType, data, type='id') {
  if (type === 'id') {
    return document.getElementById(selector)[contentType] = data;
  }

  return document.getElementsByClassName(selector)[contentType] = data;
}

export function windowLocationReplace(pathname) {
  window.location.replace(`${window.location.origin}/${pathname}`);
}