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
      <h2>Select an option:</h2>
      <Dropdown options={options} onSelect={handleOptionSelect} />

      {<h3>Selected: {selectedOption}</h3>}
    </div>
  );
};

export default Dropcomp;
