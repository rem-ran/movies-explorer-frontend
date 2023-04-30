import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isLoggenIn }) {
  return isLoggenIn ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
