import React from 'react';

const Panel = ({ label, name, placeholder, text, setText }) => {
  return (
    <div className="w-full">
      <label className="flex flex-col">
        <span className="font-medium mb-4 text-secondary">{label}</span>
        <textarea
          rows="7"
          name={name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="py-4 px-6 placeholder:text-secondary outline-none border-none rounded-lg text-black font-medium shadow-2xl sm:h-96"
        />
      </label>
    </div>
  );
};

export default Panel;
