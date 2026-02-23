import React, { useState } from 'react';
import { Plus, Save, Eye, Trash2, Copy, Edit, Clock, Calendar, Users, Settings, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const QuizBuilder = ({ roleColor = 'blue' }) => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const questionTypes = [
    { value: 'multiple-choice', label: 'Multiple Choice', icon: '☑️' },
    { value: 'true-false', label: 'True/False', icon: '✓✗' },
    { value: 'short-answer', label: 'Short Answer', icon: '📝' },
    { value: 'essay', label: 'Essay', icon: '📄' },
    { value: 'matching', label: 'Matching', icon: '🔗' },
  ];

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type,
      question: '',
      points: 1,
      options: type === 'multiple-choice' ? ['', '', '', ''] : [],
      correctAnswer: type === 'true-false' ? 'true' : '',
      explanation: '',
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion(newQuestion);
  };

  const updateQuestion = (id, updates) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, ...updates } : q)));
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
    if (currentQuestion?.id === id) setCurrentQuestion(null);
  };

  const duplicateQuestion = (id) => {
    const question = questions.find((q) => q.id === id);
    if (question) {
      const duplicate = { ...question, id: Date.now() };
      setQuestions([...questions, duplicate]);
    }
  };

  const getTotalPoints = () => {
    return questions.reduce((sum, q) => sum + (q.points || 0), 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quiz Builder</h2>
          <p className="text-gray-600">{questions.length} questions • {getTotalPoints()} points</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-5 h-5" />
            Preview
          </button>
          <button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${roleColor}-600 to-${roleColor}-700 text-white rounded-lg hover:shadow-lg transition-all`}>
            <Save className="w-5 h-5" />
            Save Quiz
          </button>
        </div>
      </div>

      {/* Quiz Settings */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quiz Title</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              placeholder="Enter quiz title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Limit (min)</label>
            <input
              type="number"
              placeholder="60"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Passing Score (%)</label>
            <input
              type="number"
              placeholder="70"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Questions List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Questions</h3>
          </div>

          {/* Add Question Buttons */}
          <div className="space-y-2">
            {questionTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => addQuestion(type.value)}
                className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-2xl">{type.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{type.label}</div>
                  <div className="text-xs text-gray-600">Add {type.label.toLowerCase()} question</div>
                </div>
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>

          {/* Questions List */}
          {questions.length > 0 && (
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">Quiz Questions</h4>
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  onClick={() => setCurrentQuestion(q)}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    currentQuestion?.id === q.id
                      ? `border-${roleColor}-500 bg-${roleColor}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-900">Q{index + 1}</span>
                      <p className="text-sm text-gray-600 truncate mt-1">
                        {q.question || 'New Question'}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          duplicateQuestion(q.id);
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Copy className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteQuestion(q.id);
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <span>{questionTypes.find((t) => t.value === q.type)?.label}</span>
                    <span>•</span>
                    <span>{q.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Question Editor */}
        <div className="lg:col-span-2">
          {currentQuestion ? (
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Edit Question
                </h3>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">Points:</label>
                  <input
                    type="number"
                    value={currentQuestion.points}
                    onChange={(e) =>
                      updateQuestion(currentQuestion.id, { points: parseInt(e.target.value) || 1 })
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                  <textarea
                    value={currentQuestion.question}
                    onChange={(e) =>
                      updateQuestion(currentQuestion.id, { question: e.target.value })
                    }
                    placeholder="Enter your question here..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Multiple Choice Options */}
                {currentQuestion.type === 'multiple-choice' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="radio"
                          name="correct-answer"
                          checked={currentQuestion.correctAnswer === index.toString()}
                          onChange={() =>
                            updateQuestion(currentQuestion.id, { correctAnswer: index.toString() })
                          }
                          className="text-blue-600"
                        />
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...currentQuestion.options];
                            newOptions[index] = e.target.value;
                            updateQuestion(currentQuestion.id, { options: newOptions });
                          }}
                          placeholder={`Option ${index + 1}`}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newOptions = [...currentQuestion.options, ''];
                        updateQuestion(currentQuestion.id, { options: newOptions });
                      }}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      + Add Option
                    </button>
                  </div>
                )}

                {/* True/False */}
                {currentQuestion.type === 'true-false' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Correct Answer</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={currentQuestion.correctAnswer === 'true'}
                          onChange={() =>
                            updateQuestion(currentQuestion.id, { correctAnswer: 'true' })
                          }
                          className="text-blue-600"
                        />
                        <span>True</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={currentQuestion.correctAnswer === 'false'}
                          onChange={() =>
                            updateQuestion(currentQuestion.id, { correctAnswer: 'false' })
                          }
                          className="text-blue-600"
                        />
                        <span>False</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Short Answer / Essay */}
                {(currentQuestion.type === 'short-answer' || currentQuestion.type === 'essay') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sample Answer (Optional)
                    </label>
                    <textarea
                      value={currentQuestion.correctAnswer}
                      onChange={(e) =>
                        updateQuestion(currentQuestion.id, { correctAnswer: e.target.value })
                      }
                      placeholder="Enter a sample answer or grading criteria..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* Explanation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Explanation (Optional)
                  </label>
                  <textarea
                    value={currentQuestion.explanation}
                    onChange={(e) =>
                      updateQuestion(currentQuestion.id, { explanation: e.target.value })
                    }
                    placeholder="Provide an explanation that will be shown after answering..."
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-12 text-center">
              <HelpCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Question Selected</h3>
              <p className="text-gray-600">Select a question from the list or add a new one to start editing</p>
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{quizTitle || 'Untitled Quiz'}</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span>{questions.length} questions</span>
                <span>•</span>
                <span>{getTotalPoints()} points</span>
                <span>•</span>
                <span>60 minutes</span>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {questions.map((q, index) => (
                <div key={q.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Question {index + 1}</h4>
                    <span className="text-sm text-gray-600">{q.points} points</span>
                  </div>
                  <p className="text-gray-900 mb-4">{q.question || 'No question text'}</p>
                  {q.type === 'multiple-choice' && q.options.length > 0 && (
                    <div className="space-y-2">
                      {q.options.map((option, i) => (
                        <label key={i} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                          <input type="radio" name={`preview-${q.id}`} className="text-blue-600" disabled />
                          <span>{option || `Option ${i + 1}`}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {q.type === 'true-false' && (
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input type="radio" name={`preview-${q.id}`} disabled />
                        <span>True</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name={`preview-${q.id}`} disabled />
                        <span>False</span>
                      </label>
                    </div>
                  )}
                  {(q.type === 'short-answer' || q.type === 'essay') && (
                    <textarea
                      placeholder="Your answer..."
                      rows={q.type === 'essay' ? 5 : 2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      disabled
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizBuilder;
