const cheerio = require('cheerio');
const fetch = require('node-fetch')
const { URL } = require('url');

function getCurrentDirUrl(url) {
  let arr = url.split('/');
  arr.splice(arr.length - 1, 1);
  let dir_url = arr.join('/');
  return dir_url;
}

async function get_icon(url) {
  let response = await fetch(url);
  let htmlString = await response.text();
  let $ = cheerio.load(htmlString);

  let _url = new URL(url);

  var icon = $('link[rel="shortcut icon"]')
    .first()
    .attr('href');
  if (icon) {
    if (
      icon.startsWith('//') ||
      icon.startsWith('http://') ||
      icon.startsWith('https://')
    ) {
      return icon;
    }
    if (icon.startsWith('/')) {
      return `${_url.origin}${icon}`;
    } else {
      let dir_url = getCurrentDirUrl(url);
      return `${dir_url}/${icon}`;
    }
  }

  var icon = $('link[rel="icon"]')
    .first()
    .attr('href');
  if (icon) {
    if (
      icon.startsWith('//') ||
      icon.startsWith('http://') ||
      icon.startsWith('https://')
    ) {
      return icon;
    }
    if (icon.startsWith('/')) {
      return `${_url.origin}${icon}`;
    }
    if (!icon.startsWith('/')) {
      let dir_url = getCurrentDirUrl(url);
      return `${dir_url}/${icon}`;
    }
  }

  var icon = `${_url.origin}/favicon.ico`;
  return icon;
}

exports.get_icon = get_icon;
exports.getCurrentDirUrl = getCurrentDirUrl;
