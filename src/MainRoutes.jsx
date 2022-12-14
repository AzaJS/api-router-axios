import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent/AddStudent";
import HomePage from "./components/HomePage/HomePage";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import StudentsList from "./components/StudentsList/StudentsList";
import Users from "./components/Users/Users";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/students" element={<StudentsList />} />
      <Route path="/details/:id" element={<StudentDetails />} />
    </Routes>
  );
};

export default MainRoutes;
