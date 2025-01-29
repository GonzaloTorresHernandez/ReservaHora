import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";


export const AppRouter = () => {

    const status :string = 'not-authenticated';

    // const { status } = useAuthStore();


    return (
        <Routes>

            <Route path="auth/login" element={ <LoginPage />} />
            <Route path="auth/register" element={ <RegisterPage />} />
            <Route path="/home" element={ <HomePage />} />

            <Route path="/*" element={<Navigate to={'home'} />} />
            
        </Routes>
    )
}

