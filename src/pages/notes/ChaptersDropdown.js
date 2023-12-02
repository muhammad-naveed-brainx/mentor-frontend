import React, { useState } from 'react';
import ChapterDetails from './ChapterDetails';
import AddContentModal from './AddContentModal';

const ChaptersDropdown = ({ selectedChapter, setSelectedChapter, subjectId }) => {
  // Dummy data for chapters
  const chaptersPerSubject = 10;
  const chapters = Array.from({ length: chaptersPerSubject }, (_, index) => ({
    id: index + 1,
    name: `Chapter ${index + 1}`,
    subjectId: subjectId,
//dummy data
    content: {
      headings: [`Heading 1`, `Heading 2`, `Heading 3`],
      subheadings: [`Subheading 1`, `Subheading 2`, `Subheading 3`],
      texts: [`Text 1`, `Text 2`, `Text 3`],
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ],
    },
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveContent = (content) => {
    console.log('Saving content:', content);
  };

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

      {/* Display ChapterDetails when selectedChapter is set */}
      {/* {selectedChapter && (
        <ChapterDetails chapterData={selectedChapter.content} />
      )} */}

      <div style={{ marginTop: '20px' }}>
        {selectedChapter && (
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Add Content
          </button>
        )}
      </div>

      {/* AddForm */}
      {isModalOpen && (
        <AddContentModal
          isOpen={isModalOpen}
          onRequestClose={() => {
            setIsModalOpen(false);
          }}
          onSave={(content) => {
            handleSaveContent(content);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ChaptersDropdown;
