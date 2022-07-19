import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import HomePage from './pages/home-page/HomePage.component';
import LoginPage from './pages/login-page/LoginPage.component';
import Header from './componets/shared/header/Header.component';
import Footer from './componets/shared/footer/Footer.component';
import PageNotFound from './pages/page-not-found/PageNotFound.component';
import SignupPage from './pages/sign-up-page/SignUpPage.component';
import BooksPage from './pages/books-page/BooksPage.component';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="books" element={<BooksPage />} />
        {/* <Route path="tasks" element={<TasksPage />} /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
