import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from "../Components/Login"
import Registration from "../Components/Registration"
import UserProfile from "../Components/UserProfile"
import BMICalculator from "../Components/BMICalculator"
import BMIHistory from "../Components/BMIHistory"
import PrivateRoutes from "./PrivateRoutes"
const AppRouter = () => {
  return (
    <Routes>
     <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/profile" element={
        <PrivateRoutes>
 <UserProfile/>
        </PrivateRoutes>
       } />
        <Route path="/bmi-calculator" element={<PrivateRoutes>

         <BMICalculator/>
        </PrivateRoutes>} />
        <Route path="/bmi-history" element={
        <PrivateRoutes><BMIHistory/></PrivateRoutes>
        } />
    </Routes>
  )
}

export default AppRouter
