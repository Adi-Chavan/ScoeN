import React from "react";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignInPage } from "./pages/auth/signin";
import { SignUpPage } from "./pages/auth/signup";
import { ProfilePage } from "./pages/student/profile";
import { Courses } from "./pages/courses";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  )
}