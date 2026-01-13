import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Plans from "./pages/Plans"
import Trainers from "./pages/Trainers"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminDashboard from "./dashboards/admin/AdminDashboard"
import MemberDashboard from "./dashboards/member/MemberDashboard"
import TrainerDashboard from "./dashboards/trainer/TrainerDashboard"
// import MemberDashboard from "./dashboards/member/MemberDashboard"
// import AdminDashboard from "./dashboards/admin/AdminDashboard"
// import TrainerDashboard from "./dashboards/trainer/TrainerDashboard"



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/member" element={<MemberDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/trainer" element={<TrainerDashboard />} /> */}
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
<Route path="/dashboard/member" element={<MemberDashboard />} />
<Route path="/dashboard/trainer" element={<TrainerDashboard />} />

    </Routes>
  )
}
