import React from 'react';

const ClassesDropdown = ({ selectedClass, setSelectedClass }) => {
  // Dummy data for classes
  const classes = [
    { id: 1, name: 'Class A' },
    { id: 2, name: 'Class B' },
    { id: 3, name: 'Class C' },
    { id: 4, name: 'Class D' },
    { id: 5, name: 'Class E' },
    { id: 6, name: 'Class F' },
    { id: 7, name: 'Class G' },
    { id: 8, name: 'Class H' },
    { id: 9, name: 'Class I' },
    { id: 10, name: 'Class J' },
  ];

  return (
    <div>
      <select
        value={selectedClass ? selectedClass.id : ''}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const selected = classes.find((cls) => cls.id === selectedId);
          setSelectedClass(selected);
        }}
      >
        <option value="" disabled>
          Select a class
        </option>
        {classes.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClassesDropdown;
