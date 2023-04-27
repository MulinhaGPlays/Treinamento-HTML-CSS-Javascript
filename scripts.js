const amongus = document.getElementById('amongus');
const zedamanga = document.getElementById('zedamanga');

const musica1 = document.getElementById('audio1');
const musica2 = document.getElementById('audio2');
const musica3 = document.getElementById('audio3');

amongus.addEventListener('mouseenter', () => {
    musica1.play();
})
amongus.addEventListener('mouseout', () => {
    musica1.pause();
    musica1.currentTime = 0;
})
amongus.addEventListener('mousedown', () => {
    musica1.pause();
    musica2.currentTime = 0;
    musica2.play();
})
amongus.addEventListener('mouseup', () => {
    musica1.play();
})
zedamanga.addEventListener('mouseenter', () => {
    musica3.currentTime = 0;
    musica3.play();
})