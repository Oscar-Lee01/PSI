import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
 
// pages & components
import Homepage from './pages/Homepage'
import Create100LFirstSemesterResult from'./pages/Create100LFirstSemesterResult'
import Create100LSecondSemesterResult from './pages/Create100LSecondSemesterResult'
import Create200LFirstSemesterResult from './pages/Create200LFirstSemesterResult'
import Create200LSecondSemesterResult from './pages/Create200LSecondSemesterResult'
import Create300LFirstSemesterResult from './pages/Create300LFirstSemesterResult'
import Create300LSecondSemesterResult from './pages/Create300LSecondSemesterResult'
import Create400LFirstSemesterResult from './pages/Create400LFirstSemesterResult'
import Create400LSecondSemesterResult from './pages/Create400LSecondSemesterResult'

import ViewResults from './pages/ViewResults'
import Login from './pages/login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/forgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'
import CreateResult from './pages/createResult'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
            <Route 
              path="/forgot-password"
              element={<ForgotPassword />}
            />
            <Route 
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route
              path="/CreateResult"
              element={<CreateResult />}
            />
            <Route
              path="/CreateResult/100L-first-semester"
              element={<Create100LFirstSemesterResult />}
            />
            <Route
              path="/CreateResult/100L-second-semester"
              element={<Create100LSecondSemesterResult />}
            />
            <Route
              path="/CreateResult/200L-first-semester"
              element={<Create200LFirstSemesterResult />}
            />
            <Route
              path="/CreateResult/200L-second-semester"
              element={<Create200LSecondSemesterResult />}
            />
            <Route
              path="/CreateResult/300L-first-semester"
              element={<Create300LFirstSemesterResult />}
            />
            <Route
              path="/CreateResult/300L-second-semester"
              element={<Create300LSecondSemesterResult />}
            />
            <Route
              path="/CreateResult/400L-first-semester"
              element={<Create400LFirstSemesterResult />}
            />
            <Route
              path="/CreateResult/400L-second-semester"
              element={<Create400LSecondSemesterResult />}
            />
            <Route
              path="/viewResults"
              element={<ViewResults />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/contact-us"
              element={<ContactUs />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
