import { Navigate, Route, Routes } from "react-router"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoignPage"
import { Link } from "react-router-dom"


export const MainApp = () => {
  return (
    <>
        <h1>Main App</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <hr />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/*" element={ <Navigate to="about" /> } />
        </Routes>

    </>
  )
}
