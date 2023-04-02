import React, { useState } from 'react';
import { styles } from '../styles';
import { Panel } from './';

const ContentPanel = () => {
  const [leftPanelText, setLeftPanelText] = useState('');
  const [rightPanelText, setRightPanelText] = useState('');

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute flex sm:flex-row flex-col inset-0 top-[120px] max-w-screen-2xl mx-auto items-center gap-24`}
      >
        {/* Left Panel */}
        <Panel
          label="SQL"
          name="leftPanel"
          text={leftPanelText}
          setText={setLeftPanelText}
          placeholder="eg. SQL..."
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
