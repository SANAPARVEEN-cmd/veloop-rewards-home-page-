import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<DashboardLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/home" element={<Home />} />

            </Route>

        </Routes>
    );
};

export default AppRoutes;