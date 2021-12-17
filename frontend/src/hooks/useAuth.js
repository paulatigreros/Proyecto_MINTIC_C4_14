import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth