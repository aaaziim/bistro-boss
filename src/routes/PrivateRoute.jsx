import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Show loading spinner or message until loading is false
    if (loading) return <p>Loading...</p>;

    // If the user is logged in, return the children components
    if (user) return children;

    // If not logged in, redirect to signin with the current location as state
    return <Navigate to="/signin" state={{ from: location }} replace={true} />;
};

export default PrivateRoute;
