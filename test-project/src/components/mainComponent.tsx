import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg mr-3 ml-3">
      <h2 className="text-xl font-bold mb-4">Count Number</h2>

      <p>Count: {count}</p> <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default MainContent;
