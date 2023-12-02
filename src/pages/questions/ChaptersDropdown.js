import React from 'react';

const ChaptersDropdown = ({ selectedChapter, setSelectedChapter, subjectId }) => {
  // Dummy data for chapters
  const chaptersPerSubject = 10;
  const chapters = Array.from({ length: chaptersPerSubject }, (_, index) => ({
    id: index + 1,
    name: `Chapter ${index + 1}`,
    subjectId: subjectId,
  }));

  return (
    <div>
      <select
        value={selectedChapter ? selectedChapter.id : ''}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const selected = chapters.find((chapter) => chapter.id === selectedId);
          setSelectedChapter(selected);
        }}
      >
        <option value="" disabled>
          Select a chapter
        </option>
        {chapters.map((chapter) => (
          <option key={chapter.id} value={chapter.id}>
            {chapter.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChaptersDropdown;
