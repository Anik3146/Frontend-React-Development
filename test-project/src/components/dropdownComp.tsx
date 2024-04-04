import React, { useState } from 'react';
import Dropdown from './dropdown';

const options = ['Option 1', 'Option 2', 'Option 3'];

const Dropcomp: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("none");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Dropdown menu</h1>
      <h2>Select an option :</h2>
      <br />
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <br />
      <br /> 
      <h3>Selected : {selectedOption}</h3>
    </div>
  );
};

export default Dropcomp;
