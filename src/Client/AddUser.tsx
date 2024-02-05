import React, { useState } from "react";

import { arrUsers } from "../Admin/AddToQuiz/InfoAboutQuizUSer";

const AddUser: React.FC = () => {
  const [userArr, setUserArr] = useState<string[]>(arrUsers);

  return (
    <>
      <div className="BoxStartQuiz">
        <ul>
          {userArr.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddUser;
