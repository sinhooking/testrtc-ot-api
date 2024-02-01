'use client'
import React, { useRef, useEffect } from 'react';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

const Test = () => {
    // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  
  const apiKey = '';
  const sessionId = '';
  const token = '';


  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  useEffect(() => {
    const OT = window.OT;

    // Initialize an OpenTok Session object
    console.log(window.OT)
    const session = OT.initSession(apiKey, sessionId);
    console.log(session)

    // Set session and token (and optionally properties) for Web Components
    publisher.current.session = session;
    publisher.current.token = token;
    publisher.current.properties = {
      fitMode: 'cover',
      height: '100%',
      resolution: '1920x1080',
      videoContentHint: 'detail',
      width: '100%',
    };
    subscribers.current.session = session;
    subscribers.current.token = token;
    screenshare.current.session = session;
    screenshare.current.token = token;

  });

  return (
    <div className="App">
      <header className="App-header">
       ddd
      </header>
      <div className="App-container">
        <section className="App-section-publisher">
          <fieldset>
            <legend>Publisher</legend>
            <video-publisher ref={publisher}></video-publisher>
          </fieldset>
          <button onClick={toggleVideo}>
              toggle Video
          </button>
          <button onClick={toggleAudio}>
              toggle Audio
          </button>
          <br/><br/>
          <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share>
        </section>
        <section className="App-section-subscribers">
          <fieldset>
            <legend>Subscribers</legend>
            <video-subscribers ref={subscribers}></video-subscribers>
          </fieldset>
        </section>
      </div>
    </div>
  );
}

export default Test;
