import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const startTime = localStorage.getItem('videoplayer-current-time');
if (startTime) {
  player.setCurrentTime(startTime);
}

 const onPlay = function (data) {
   console.log('played the video!');

   const currentTime = data.seconds;
   console.log(currentTime);

   localStorage.setItem('videoplayer-current-time', currentTime);
 };
player.on('timeupdate', throttle(onPlay, 1000));

 