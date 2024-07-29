// src/components/VideoPlayer.js

"use client"

import React, { useRef } from 'react';

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);
    
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-2">
            <video ref={videoRef} className="video-player" src={videoSrc} controls />
        </div>
    );
};

export default VideoPlayer;