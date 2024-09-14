import React, { useState } from 'react';
import './CommunitySupport.css';

function QASection() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answers: [] }]);
      setNewQuestion('');
    }
  };

  const handleAnswerSubmit = (index) => {
    if (newAnswer.trim()) {
      const updatedQuestions = [...questions];
      updatedQuestions[index].answers.push(newAnswer);
      setQuestions(updatedQuestions);
      setNewAnswer('');
    }
  };

  return (
    <div className="qa-section">
      <h3>Q&A Section</h3>
      <input
        type="text"
        placeholder="Ask a question..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <button onClick={handleQuestionSubmit}>Submit</button>

      <div className="questions-list">
        {questions.map((q, index) => (
          <div key={index} className="question-item">
            <h4>{q.question}</h4>
            <div className="answers-list">
              {q.answers.map((answer, ansIndex) => (
                <p key={ansIndex} className="answer-item">{answer}</p>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add an answer..."
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
            <button onClick={() => handleAnswerSubmit(index)}>Submit Answer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QASection;
