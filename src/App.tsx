import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
interface AppProps {}

const LazyDashboard = lazy(() => import("./components/Dashboard"));
const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/profiles/:username"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Suspense fallback={<div>...Loading component"</div>}>
              <LazyDashboard />
            </Suspense>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
