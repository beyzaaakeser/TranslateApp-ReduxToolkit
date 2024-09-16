import React from 'react';

const LanguageSelect = () => {
  return (
    <div className="flex gap-2 text-black">
      <select className="flex-1">
        <option value="">Select</option>
      </select>
      <button className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition text-white rounded">
        Change
      </button>
      <select className="flex-1">
        <option value="">Select</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
