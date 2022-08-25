import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const auth = {
        user: true
    }

    return auth.user ? children : <Navigate to="/login" />;
}

export default PrivateRoute