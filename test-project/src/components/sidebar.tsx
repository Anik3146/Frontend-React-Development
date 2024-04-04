import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Age:', age);
    
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input
            type="number"
            id="age"
            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
