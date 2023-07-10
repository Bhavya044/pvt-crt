import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const SignUp = lazy(() => import("./pages/Signup/Signup"));
  const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
