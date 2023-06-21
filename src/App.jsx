import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Layout } from "./components/layout/Layout/Layout";

const Home = lazy(() => import("./page/Home"));
const Tweets = lazy(() => import("./page/Tweets"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
