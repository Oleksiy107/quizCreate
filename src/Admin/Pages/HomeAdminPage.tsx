import React, { useState } from "react";
const HomeAdminPage: React.FC = () => {
  const [QuizArr, SetQuizArr] = useState<string[]>([]);
  const [blockVisible, setBlockVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      SetQuizArr((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
    setTimeout(() => {
      console.log("Hello, World!");
      // Hide the block after logging
      setBlockVisible(false);
    }, 3000);
  };
  return (
    <>
      {QuizArr.length === 0 ? (
        <div>
          <p>No active quizzes yet</p>
          <button>
            {" "}
            <a href="/CreatePage">Create</a>
          </button>
        </div>
      ) : (
        <div>
          <p>Active quizzes</p>
          <ul>
            {QuizArr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default HomeAdminPage;
