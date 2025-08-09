const videoThumbnails = document.querySelectorAll(".gallery .all-videos .thumbnail");
const videoPlayer = document.querySelector(".featured-video iframe");
const videoTitle = document.querySelector(".video-title");

const showVideo = (videoId, title) => {
    let videoUrl = `https://www.youtube.com/embed/${videoId}`;
    videoPlayer.setAttribute("src", videoUrl);
    videoTitle.innerHTML = title;
};

videoThumbnails.forEach(v => {
    v.addEventListener("click", () => {
        const id = v.dataset.id;
        const title = v.dataset.title;
        showVideo(id, title);
    });
});