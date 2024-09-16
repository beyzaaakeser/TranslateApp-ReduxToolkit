import React from 'react';

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">
          Translete +{' '}
        </h1>

      

        <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
          <div className="flex-1">
            <textarea className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]"></textarea>
          </div>
          <div>
            <textarea
              disabled
              className="w-full min-h-[300px] max-h-[500px] text-gray-300 text-[20px] rounded p-[10px]"
            ></textarea>
          </div>
        </div>

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
