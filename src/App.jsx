import React, { useEffect, useState } from 'react';
import LanguageSelect from './components/LanguageSelect';
import TextContainer from './components/TextContainer';
import { useDispatch } from 'react-redux';
import { getLangs } from './redux/actions';

const App = () => {
  const [sourceLang, setSourceLang] = useState({
    label: 'Turkish',
    value: 'tr',
  });
  const [targetLang, setTargetLang] = useState({
    label: 'English',
    value: 'en',
  });
  const [text, setText] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLangs());
  }, []);

  //console.log(sourceLang, targetLang,text);

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">
          Translete +{' '}
        </h1>

        <LanguageSelect
          setSourceLang={setSourceLang}
          sourceLang={sourceLang}
          setTargetLang={setTargetLang}
          targetLang={targetLang}
        />

        <TextContainer setText={setText} text={text} />

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
