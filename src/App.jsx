import React from 'react';
import Select from './components/LanguageSelect';
import LanguageSelect from './components/LanguageSelect';
import TextContainer from './components/TextContainer';

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">
          Translete +{' '}
        </h1>

        <LanguageSelect />

        <TextContainer />

        <button
          className="bg-zinc-700 px-5 py-3 rounded-md 
        font-semibold hover:ring-2 hover:bg-zinc-900 
        cursor-pointer transition mt-3 disabled:brightness-50"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default App;
