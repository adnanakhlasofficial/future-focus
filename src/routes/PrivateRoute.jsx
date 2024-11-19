import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <Loading></Loading>

    if (!user) return <Navigate state={{from: location}} to="/login"></Navigate>
    
    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;