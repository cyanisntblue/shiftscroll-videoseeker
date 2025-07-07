document.addEventListener("wheel", function (e) {
    if (!e.shiftKey) return;

    const video = document.querySelector("video");
    if (!video) return;

    // prevent page from scrolling
    e.preventDefault();

    const seekAmount = 5; // seconds

    // seek forward or backward depending on direction of scroll
    if (e.deltaY > 0) {
        video.currentTime -= seekAmount;
    } else {
        video.currentTime += seekAmount;
    }
}, { passive: false }); // prevent page from scrolling
