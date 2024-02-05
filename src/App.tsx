import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./TogetherComp/Header/Pages/AdminPage";
import UserPage from "./TogetherComp/Header/Pages/UserPage";
import UserStart from "./Admin/AddToQuiz/UserStartQuiz";
import FormPage from "./TogetherComp/Header/Pages/FormPage";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />

        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/CreatePage" element={<UserStart />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
