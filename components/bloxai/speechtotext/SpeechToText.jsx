"use client"

import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { FaMicrophone } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onStop = async (recordedBlob) => {
    const formData = new FormData();
    formData.append('audio', recordedBlob.blob);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer AIzaSyD6NrkmWrSyYhaHjTNUQHXb_qPKJkXcWV0`,
        },
      });

      const result = await response.json();
      setTranscription(result.text); // Adjust based on API response
    } catch (error) {
      console.error('Error converting audio to text:', error);
    }
  };

  return (
    <div>
      <div>
        <div className='flex items-center mb-4 gap-2'>
          <Button className='p-4' onClick={startRecording} disabled={isRecording}>
            <FaMicrophone /> Start Recording
          </Button>
          <Button className='p-4' onClick={stopRecording} disabled={!isRecording}>
            Stop Recording
          </Button>
        </div>
        <ReactMic
          record={isRecording}
          className="sound-wave"
          onStop={onStop}
          strokeColor="#000000"
          backgroundColor="#ffffff" />
      </div>
      <div>
        <h3>Transcription:</h3>
        <Textarea name='description'>{transcription}</Textarea>
      </div>
    </div>
  );
};

export default SpeechToText;
