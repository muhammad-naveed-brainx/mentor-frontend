import React, { useState } from 'react';

const QuestionsTable = ({ selectedChapter, searchTerm, setSearchTerm }) => {
  // Dummy data for questions
  const questionsPerChapter = 20;
  const [questions, setQuestions] = useState(
    Array.from({ length: questionsPerChapter }, (_, index) => ({
      id: index + 1,
      text: `Question ${index + 1}`,
    }))
  );
  const [newQuestionText, setNewQuestionText] = useState('');

  const handleAddQuestion = () => {
    if (newQuestionText.trim() !== '') {
      const newQuestion = {
        id: questions.length + 1,
        text: newQuestionText,
      };

      setQuestions([...questions, newQuestion]);
      setNewQuestionText('');
    }
  };

  const handleDeleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  const handleEditQuestion = (id, newText) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, text: newText } : question
    );
    setQuestions(updatedQuestions);
  };

  const filteredQuestions = questions.filter((question) =>
    question.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <input
            type="text"
            placeholder="Add a new question"
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
          />
          <button onClick={handleAddQuestion}>Add Question</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Questions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', color: 'black' }}>Question Number</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', color: 'black' }}>Questions</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', color: 'black' }}>Delete</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', color: 'black' }}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map((question) => (
            <tr key={question.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{question.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{question.text}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                <button onClick={() => handleDeleteQuestion(question.id)}>Delete</button>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                <button
                  onClick={() => {
                    const newText = prompt('Enter the new text:', question.text);
                    if (newText !== null) {
                      handleEditQuestion(question.id, newText);
                    }
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
