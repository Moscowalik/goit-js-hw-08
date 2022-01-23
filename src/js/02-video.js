import { Player } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const localStorageKey = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

function onTimeUpdate(e) {
  localStorage.setItem(localStorageKey, e.seconds);
  console.log(`'Просмотрел видео' ${e.seconds}`);
}

const saveTime = localStorage.getItem(localStorageKey);
console.log(saveTime);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
