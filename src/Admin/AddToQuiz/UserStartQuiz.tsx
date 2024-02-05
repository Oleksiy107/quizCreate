import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

interface QuizAnswer {
  id: number;
  answer: string;
}

interface Quiz {
  id: number;
  question: string;
  answers: QuizAnswer[];
  chosenAnswer?: string;
}

let nextTodoId = 3;
let nextQuizId = 1;

const initialTodos: Todo[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

const initialQuizzes: Quiz[] = [
  {
    id: 0,
    question: 'What is the capital of France?',
    answers: [
      { id: 0, answer: 'Paris' },
      { id: 1, answer: 'Berlin' },
      { id: 2, answer: 'Madrid' },
    ],
  },
];

const TaskApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [quizzes, setQuizzes] = useState<Quiz[]>(initialQuizzes);
  const [newQuizQuestion, setNewQuizQuestion] = useState<string>('');
  const [newQuizAnswers, setNewQuizAnswers] = useState<string[]>(['', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextTodoId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === nextTodo.id ? nextTodo : t))
    );
  }

  function handleDeleteTodo(todoId: number) {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todoId));
  }

  function handleCreateQuiz() {
    if (newQuizQuestion.trim() === '' || newQuizAnswers.some((answer) => answer.trim() === '')) {
      // Ensure question and answers are not empty
      alert('Please provide a question and answers.');
      return;
    }

    if (correctAnswerIndex === null || correctAnswerIndex < 0 || correctAnswerIndex >= newQuizAnswers.length) {
      // Ensure a correct answer is selected
      alert('Please select a correct answer.');
      return;
    }

    const answers: QuizAnswer[] = newQuizAnswers.map((answer, index) => ({
      id: index,
      answer,
    }));

    setQuizzes([
      ...quizzes,
      {
        id: nextQuizId++,
        question: newQuizQuestion,
        answers,
        chosenAnswer: newQuizAnswers[correctAnswerIndex],
      },
    ]);

    // Reset input fields
    setNewQuizQuestion('');
    setNewQuizAnswers(['', '', '']);
    setCorrectAnswerIndex(null);
  }

  return (
    <>
      <div>
        <h3>Create Todo</h3>
        <label>
          Title:
          <input
            type="text"
            onChange={(e) => handleAddTodo(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h3>Todos</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Create Quiz</h3>
        <label>
          Question:
          <input
            type="text"
            value={newQuizQuestion}
            onChange={(e) => setNewQuizQuestion(e.target.value)}
          />
        </label>
        <br />
        <label>
          Answers:
          <ul>
            {newQuizAnswers.map((answer, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => {
                    const updatedAnswers = [...newQuizAnswers];
                    updatedAnswers[index] = e.target.value;
                    setNewQuizAnswers(updatedAnswers);
                  }}
                />
              </li>
            ))}
          </ul>
        </label>
        <label>
          Correct Answer:
          <select
            value={correctAnswerIndex !== null ? correctAnswerIndex.toString() : ''}
            onChange={(e) => setCorrectAnswerIndex(Number(e.target.value))}
          >
            {newQuizAnswers.map((_, index) => (
              <option key={index} value={index}>
                Option {index + 1}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleCreateQuiz}>Create Quiz</button>
      </div>

      <div>
        <h3>Quizzes</h3>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <p>Question: {quiz.question}</p>
              <ul>
                {quiz.answers.map((answer) => (
                  <li key={answer.id}>{answer.answer}</li>
                ))}
              </ul>
              <p>Chosen Answer: {quiz.chosenAnswer}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskApp;
