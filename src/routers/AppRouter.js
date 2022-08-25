import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/account/*' element={<PrivateRoute> <AccountPage /> </PrivateRoute>} />
        <Route exact path='/projects/*' element={<PrivateRoute> <ProjectsPage /> </PrivateRoute>} />
        <Route exact path='/project/:projectId/*' element={<PrivateRoute> <ProjectPage /> </PrivateRoute>} />
        <Route exact path='/admin/users/*' element={<PrivateRoute> <UsersPage /> </PrivateRoute>} />

        <Route exact path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
