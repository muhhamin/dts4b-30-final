import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./containers/Login";
import RegisterPage from "./containers/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { Box } from "@mui/material";
import Detail from "./components/Detail";
import MovieList from "./containers/MovieList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MovieList />
              </ProtectedRoute>
            }
          />
          <Route
            path="detail/:id"
            element={
              <ProtectedRoute>
                <Detail />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <ProtectedRoute loginOnly={false}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute loginOnly={false}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <Box
              sx={{
                display: "flex",
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}>
              <img src={require("./error-404.png")} alt="404" />
              <p>You have reach the edge of universe</p>
              <Link to="/">Take me home!</Link>
            </Box>
          }
        />{" "}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
