export default function changeMarkup() {
    if (!document.querySelector('.storage-button')) {
        return;
    }
    const watchedBtn = document.getElementById('watched');
    const queueBtn = document.getElementById('queue');
    console.log(watchedBtn);
    console.log(queueBtn);

    if (watchedBtn.classList.contains('button-active')) {
        console.log('nead watched');
        createWatchedMarkup();
    } else {
        createQueueMarkup();
        console.log('nead Queue');
    }
}