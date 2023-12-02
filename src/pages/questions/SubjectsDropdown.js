import React from 'react';

const SubjectsDropdown = ({ selectedSubject, setSelectedSubject, classId }) => {
  // Dummy data for subjects
  const subjectsPerClass = 10;
  const subjects = Array.from({ length: subjectsPerClass }, (_, index) => ({
    id: index + 1,
    name: `Subject ${index + 1}`,
    classId: classId,
  }));

  return (
    <div>
      <select
        value={selectedSubject ? selectedSubject.id : ''}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const selected = subjects.find((subject) => subject.id === selectedId);
          setSelectedSubject(selected);
        }}
      >
        <option value="" disabled>
          Select a subject
        </option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubjectsDropdown;
