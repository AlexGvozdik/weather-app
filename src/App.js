import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
const MainPage = lazy(() => import("./pages/MainPage.js"));
const SearchPage = lazy(() => import("./pages/SearchPage.js"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.js"));
const DetailsPage = lazy(() => import("./pages/DetailsPage.js"));

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/weather-app" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/details/:name" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <ToastContainer position="top-right" autoClose={3000} />
      </Container>
    </>
  );
}

export default App;
