import React from 'react';
import { copy } from '../assets';

const Panel = ({ label, name, placeholder, text, setText }) => {
  return (
    <div className="w-full bg-orange-100 p-4 rounded-lg shadow-2xl">
      <label className="flex flex-col">
        <span className="font-bold mb-4 text-secondary">{label}</span>
        <textarea
          rows="7"
          name={name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="py-4 px-6 placeholder:text-secondary outline-none border-none rounded-lg text-black font-medium shadow-2xl sm:h-96"
        />
      </label>
      {name === 'leftPanel' && (
        <button className="bg-primary rounded-lg mt-4 p-2 text-secondary cursor-pointer">
          Generate
        </button>
      )}
      {name === 'rightPanel' && (
        <img
          src={copy}
          alt="copy to clipboard"
          className="bg-primary rounded-lg mt-4 p-2 text-secondary cursor-pointer"
        />
      )}
    </div>
  );
};

export default Panel;
