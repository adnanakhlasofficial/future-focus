import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <h2 className="text-9xl">Loading</h2>

    if (!user) return <Navigate state={{from: location}} to="/login"></Navigate>
    
    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;