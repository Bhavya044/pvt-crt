import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const SignUp = lazy(() => import("./pages/Signup"));
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
