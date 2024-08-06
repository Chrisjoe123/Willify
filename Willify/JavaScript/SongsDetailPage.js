document.addEventListener("DOMContentLoaded", () => {
    const normalVersion = document.querySelector(".normal-version");
    const phoneVersion = document.querySelector(".phone-version");
    const normalAudio = document.getElementById("audio-normal");
    const phoneAudio = document.getElementById("audio-phone");

    function handleAudioPlayback() {
        if (window.getComputedStyle(normalVersion).display !== "none") {
            normalAudio.play();
            phoneAudio.pause();
            phoneAudio.currentTime = 0;
        } else if (window.getComputedStyle(phoneVersion).display !== "none") {
            phoneAudio.play();
            normalAudio.pause();
            normalAudio.currentTime = 0;
        }
    }

    handleAudioPlayback();
    window.addEventListener("resize", handleAudioPlayback);

    const audioElements = [
        {
            audio: normalAudio,
            playPauseButton: document.getElementById('play-pause-normal'),
            prevButton: document.getElementById('prev-normal'),
            nextButton: document.getElementById('next-normal'),
            progressBar: document.getElementById('progress-bar-normal'),
            currentTimeElement: document.querySelector('.current-time-normal'),
            durationElement: document.querySelector('.duration-normal')
        },
        {
            audio: phoneAudio,
            playPauseButton: document.getElementById('play-pause-phone'),
            prevButton: document.getElementById('prev-phone'),
            nextButton: document.getElementById('next-phone'),
            progressBar: document.getElementById('progress-bar-phone'),
            currentTimeElement: document.querySelector('.current-time-phone'),
            durationElement: document.querySelector('.duration-phone')
        }
    ];

    audioElements.forEach(({ audio, playPauseButton, prevButton, nextButton, progressBar, currentTimeElement, durationElement }) => {
        playPauseButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseButton.innerHTML = '&#10074;&#10074;';
            } else {
                audio.pause();
                playPauseButton.innerHTML = '&#9654;';
            }
        });

        audio.addEventListener('timeupdate', () => {
            const currentTime = formatTime(audio.currentTime);
            const duration = formatTime(audio.duration);
            currentTimeElement.textContent = currentTime;
            durationElement.textContent = duration;
            progressBar.value = (audio.currentTime / audio.duration) * 100;
        });

        progressBar.addEventListener('input', () => {
            const value = progressBar.value;
            audio.currentTime = (value / 100) * audio.duration;
        });

        prevButton.addEventListener('click', () => {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
        });

        nextButton.addEventListener('click', () => {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
