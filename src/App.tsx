import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LayoutProfile from "./components/LayoutProfile";
import NotFound from "./components/NotFound";
import PostDetail from "./components/PostDetail";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
interface AppProps {}

const LazyDashboard = lazy(() => import("./components/Dashboard"));
const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profiles/:userId" element={<LayoutProfile />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="posts/:postId" element={<PostDetail />} />
      </Route>
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
