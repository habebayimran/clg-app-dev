import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './landingpage/Landing'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AdminDashboard from './admin/AdminDashboard'
import Events from './admin/Events'
import Reviews from './admin/Reviews'
import Charts from './admin/Charts'
import LogoutButton from './admin/LogoutButton'
import Dashboard from './dashboard/Dashboard'
import Programs from './dashboard/pages/Programs/Programs'
import Practice from './dashboard/pages/Practice/Practice'
import AdminValidationForm from './admin/AdminValidationform'
import Livestream from './dashboard/pages/Livestream/Livestream'
import Courses from './dashboard/pages/Courses/Courses'
import PaymentPage from './dashboard/pages/Courses/PaymentPage'

const App = () => {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/signup' element={<RegisterForm/>}></Route>
          <Route path='/adminvalidation' element={<AdminValidationForm/>}></Route>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
          <Route path='/events' element={<Events/>} />
          <Route path='/reviews' element={<Reviews/>} />
          <Route path='/enrollments' element={<Charts/>} />
          <Route path='/logout' element={<LogoutButton />} />
          <Route path = "/dashboard" element = {<Dashboard />}></Route>
          <Route path = "/programs" element = {<Programs />}></Route>
          <Route path = "/practice" element = {<Practice />}></Route>
          <Route path = "/livestream" element = {<Livestream />}></Route>
          <Route path = "/courses" element = {<Courses />}></Route>
          <Route path = "/payment" element = {<PaymentPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
