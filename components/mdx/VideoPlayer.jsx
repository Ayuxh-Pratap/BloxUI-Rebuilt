// src/components/VideoPlayer.js

"use client"

import React, { useRef } from 'react';

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    const handleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) { // Firefox
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
            videoRef.current.msRequestFullscreen();
        }
    };

    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-2">
            <video ref={videoRef} className="video-player" src="/animation/apple.mp4" controls />
        </div>
    );
};

export default VideoPlayer;