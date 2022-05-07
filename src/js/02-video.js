const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const STORAGE_KEY_PLAYTIME = "videoplayer-current-time";
    player.on('timeupdate', throttle(onPlay, 1000));
    function onPlay(data){
        const timePlayed = JSON.stringify(data.seconds);
        localStorage.setItem(STORAGE_KEY_PLAYTIME, timePlayed);
    };
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    setCurrentTime();
    function setCurrentTime(){
        const savedTime = localStorage.getItem(STORAGE_KEY_PLAYTIME);
        if(savedTime){
            const convertSavedTime = JSON.parse(savedTime);
            player.setCurrentTime(convertSavedTime);
        };
};
