import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { Panel } from './';
import { switchImg } from '../assets';

const ContentPanel = () => {
  const [leftPanelText, setLeftPanelText] = useState('');
  const [rightPanelText, setRightPanelText] = useState('');

  const handleModeSwitch = () => {};

  const getData = async () => {
    const response = await fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        prompt: 'Hi!',
      },
    });
    return response;
  };

  useEffect(() => {
    // const data = getData();
    // console.log(data);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute flex sm:flex-row flex-col inset-0 top-[120px] max-w-screen-2xl mx-auto items-center sm:gap-24 gap-8`}
      >
        {/* Left Panel */}
        <Panel
          label="SQL"
          name="leftPanel"
          text={leftPanelText}
          setText={setLeftPanelText}
          placeholder="eg. SQL..."
        />

        <img
          src={switchImg}
          alt="Switch mode"
          onClick={handleModeSwitch}
          className="cursor-pointer"
        />

        {/* Right Panel */}
        <Panel
          label="Natural Language"
          name="rightPanel"
          text={rightPanelText}
          setText={setRightPanelText}
          placeholder="eg. Natural Language..."
        />
      </div>
    </section>
  );
};

export default ContentPanel;
