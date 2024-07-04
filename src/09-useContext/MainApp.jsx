import { Navigate, Route, Routes } from "react-router"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoignPage"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
    <>
        {/* <h1>Main App</h1> */}
        <Navbar />
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
