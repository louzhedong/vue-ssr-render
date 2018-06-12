/*
 * @Author: Michael
 * @Date: 2018-06-12 15:43:31
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:58:37
 */

export function formatDate(timestamp, format) {
  if (!timestamp) {
    return '';
  }
  const date = new Date(Number.parseInt(timestamp));
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let i = date.getMinutes();
  let s = date.getSeconds();
  const w = date.getDay();
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  m = m < 10 ? `0${m}` : m;
  d = d < 10 ? `0${d}` : d;
  h = h < 10 ? `0${h}` : h;
  i = i < 10 ? `0${i}` : i;
  s = s < 10 ? `0${s}` : s;

  return format.replace('YYYY', y)
    .replace('MM', m)
    .replace('DD', d)
    .replace('H', h)
    .replace('i', i)
    .replace('s', s)
    .replace('WW', week[w]);
}

export function formatMinute(tempminute) {
  let hour = Math.floor(tempminute / 60);
  let minute = tempminute % 60;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hour}:${minute}`;
}
