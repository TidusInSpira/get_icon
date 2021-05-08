const test = require('ava');
const { get_icon, getCurrentDirUrl } = require('../index');

test('link[rel="icon"] get absolute path', async t => {
  let url = 'https://juejin.im';
  let icon = await get_icon(url);
  t.is(icon, 'https://b-gold-cdn.xitu.io/favicons/v2/favicon.ico');
});

test('link[rel="icon"] get relative path', async t => {
  let url = 'http://mongoosejs.net/docs/populate.html';
  let icon = await get_icon(url);
  t.is(
    icon,
    'http://mongoosejs.net/docs/images/favicon/android-icon-192x192.png'
  );
});

test('link[rel="icon"] ', async t => {
  let url = 'http://nodejs.cn/api/url.html#url_url_host';
  let icon = await get_icon(url);
  t.is(icon, '//static.nodejs.cn/_static/img/favicon.png');
});

test('link[rel="shortcut icon"]', async t => {
  let url = 'https://zhihu.com';
  let icon = await get_icon(url);
  t.is(icon, 'https://static.zhihu.com/heifetz/favicon.ico');
});

test('link[rel="shortcut icon"] start with /', async t => {
  let url = 'https://baidu.com';
  let icon = await get_icon(url);
  t.is(icon, 'https://baidu.com/favicon.ico');
});

test('/favicon.ico', async t => {
  let url = 'https://developer.microsoft.com/en-us/';
  let icon = await get_icon(url);
  t.is(icon, 'https://developer.microsoft.com/favicon.ico');
});

test('get current dir url', async t => {
  let url = 'http://mongoosejs.net/docs/populate.html';
  let dir_url = getCurrentDirUrl(url);
  t.is(dir_url, 'http://mongoosejs.net/docs');
});
