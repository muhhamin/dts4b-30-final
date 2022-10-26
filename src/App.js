import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import MovieList from "./containers/MovieList";
import { Box } from "@mui/material";
import Detail from "./components/Detail";
import LoginPage from "./containers/Login";
import RegisterPage from "./containers/Register";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProtectedRoute>
          <MovieList />
          </ProtectedRoute>} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        
        <Route
            path="*"
            element={
              <Box sx={{
                display: 'flex', 
                margin: 10, 
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column',
              }}>
                <img
                  src={require('./error-404.png')}
                  alt="404"
                />
                <p>You have reach the edge of universe</p>
                <Link to="/">Take me home!</Link>
              </Box>
            }
          />
      </Routes>
    </div>
  );
}

export default App;
