import React from "react";
import HomeAdminPage from "../../../Admin/Pages/HomeAdminPage";
import Header from "../Header";

// import AddUser from "../../../Client/AddUser";
// import CreateQuiz from "../../../Admin/CreateQuiz/CreateQuiz";
// import HomePage from "./HomePage";
const AdminPage: React.FC = () => {
  return (
    <>
      <Header />
      <HomeAdminPage />
      {/* <AddUser />
      <CreateQuiz />
      <HomePage /> */}
    </>
  );
};
export default AdminPage;
