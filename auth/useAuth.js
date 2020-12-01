import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
    const { userLogged, setUserLogged } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUserLogged(user)
        authStorage.storeToken(authToken);
    };

    const logOut = () => {
        setUserLogged(null);
        authStorage.removeToken();
    };

    return {userLogged, logIn, logOut };
};
