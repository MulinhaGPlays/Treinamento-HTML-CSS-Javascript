const amongus = document.getElementById('amongus');
const zedamanga = document.getElementById('zedamanga');

amongus.addEventListener('mouseenter', () => {
    audio1.play();
})
amongus.addEventListener('mouseout', () => {
    audio1.pause();
    audio1.currentTime = 0;
})
amongus.addEventListener('mousedown', () => {
    audio1.pause();
    audio2.currentTime = 0;
    audio2.play();
})
amongus.addEventListener('mouseup', () => {
    audio1.play();
})
zedamanga.addEventListener('mouseenter', () => {
    audio3.currentTime = 0;
    audio3.play();
})