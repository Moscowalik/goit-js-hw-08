import { Player } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

const localStorageKey = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

const saveTime = localStorage.getItem(localStorageKey);

if (saveTime) {
  player.setCurrentTime(saveTime);
}
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(localStorageKey, e.seconds);
    console.log(`'Просмотрел видео' ${e.seconds}`);
  }, 1000),
);
