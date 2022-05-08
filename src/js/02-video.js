import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer - current - time';
const onPlay = function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(30.456);
