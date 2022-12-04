import * as React from "react";

const Provider =({ children }) => {

    const [authUser, setAuthUser] = React.useState({
        token: localStorage.getItem("token"),
        isAuth: (localStorage.getItem("token")) ? true : false,
        isAdmin : (localStorage.getItem("is-admin") === "true") 
    });

    const value = React.useMemo(() => ({
        authUser,
        setAuthUser
    }), [authUser, setAuthUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

export default Provider


export const UserContext = React.createContext()